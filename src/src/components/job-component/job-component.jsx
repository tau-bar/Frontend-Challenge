const JobComponent = ({ jobData, updateJobCheck, checked }) => {
    const handleCheckJob = (event, jobData) => {
        updateJobCheck(jobData.name, event.target.checked)
    }

    return (
        <div>
            <input type="checkbox" checked={checked} onChange = {(event) => handleCheckJob(event, jobData)}/>
            <label>{ jobData.name } [{jobData.count}]</label>
        </div>
    )
}

export default JobComponent;