import './job-component.styles.scss';

const JobComponent = ({ jobData, updateJobCheck, checked }) => {
    const handleCheckJob = (event, jobData) => {
        updateJobCheck(jobData.name, event.target.checked)
    }

    return (
        <div className = "job-component">
            <input type="checkbox" checked={checked} onChange = {(event) => handleCheckJob(event, jobData)}/>
            <label>{ jobData.name } </label>
            <label className = "job-count">{jobData.count}</label>
        </div>
    )
}

export default JobComponent;