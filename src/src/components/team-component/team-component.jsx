import { useState, useEffect } from "react";
import JobComponent from "../job-component/job-component";
import CustomButton from "../custom-button/custom-button";
import './team-component.styles.scss';

const TeamComponent = ({ teamData }) => {
    /**
     * Creates the defaullt checkedJobs state where all the jobs are false.
     * @returns An object where all the jobs have the value false.
     */
    const createJobState = () => {
        const jobData = {}
        teamData.jobs.map(job => jobData[job.name] = false)
        return jobData;
    }

    /**
     * Creates a checkedJobs object where all the jobs are true.
     * @returns Object where all jobs are true.
     */
    const setJobsTrue = () => {
        const jobData = {}
        teamData.jobs.map(job => jobData[job.name] = true)
        return jobData;
    }

    /**
     * Represents the state of whether the team is collapsed.
     */
    const [isCollapsed, setIsCollapsed] = useState(false);

    /**
     * Represents the state of whether the team check is checked.
     */
    const [isTeamChecked, setIsTeamChecked] = useState(false);

    /**
     * Represents whether the jobs under the team are checked or not.
     */
    const [checkedJobs, setCheckedJobs] = useState(createJobState());

    /**
     * Represents the total count of jobs under a team which are checked.
     */
    const [teamTotal, setTeamTotal] = useState(0);    

    /**
     * Handles the event when the user clicks on the check for the team.
     * @param {*} event The event when user clicks on the check.
     */
    const handleTeamCheckOnChange = (event) => {
        if (isTeamChecked) {
            setCheckedJobs(createJobState())
        } else {
            setCheckedJobs(setJobsTrue())
        }
        setIsTeamChecked(event.target.checked)
    }

    /**
     * Updates the job with the jobName to be the value passed into the function in checkedJobs state.
     * @param {*} jobName The job with this jobName will get updated.
     * @param {*} value The value to set the job to.
     */
    const updateJobCheck = (jobName, value) => {
        setCheckedJobs({...checkedJobs, [jobName]: value});
        
    }

    /**
     * When there is a change, update the team check if any of the jobs under a team gets checked, or uncheck
     * the team check if all the jobs under the team are not checked.
     * Also updates the team total based on which jobs under the team are checked.
     */
    useEffect(() => {
        updateTeamCheckOnChange();
        updateTeamTotalOnChange();
    }) 

    /**
     * Updates isTeamChecked when there is any true value in the jobs.
     */
    const updateTeamCheckOnChange = () => {
        for (const [key, value] of Object.entries(checkedJobs)) {
            if (value) {
                setIsTeamChecked(true);
                return;
            }
        }
        setIsTeamChecked(false);
    }

    /**
     * Updates the teamTotal based on the jobs that are marked true.
     */
    const updateTeamTotalOnChange = () => {
        let count = 0;
        for (const [key, value] of Object.entries(checkedJobs)) {
            if (value) {
                count += getCountFromTeamData(key);
            }
        }
        setTeamTotal(count)
    }

    /**
     * Obtains the count of the job from the teamData.
     * @param {} key The jobName to get the count of.
     * @returns The count of the job.
     */
    const getCountFromTeamData = (key) => {
        let count = 0;
        teamData.jobs.forEach(job => count += (job.name === key ? job.count : 0))
        return count;
    }

    return (
        <div className="team-component">
        <div className="team-name">
            <input className = "team-check" onChange = {handleTeamCheckOnChange} checked={isTeamChecked} type="checkbox"/>
            <label>{teamData.name} </label>
            <label className = "team-total">{teamTotal}</label>
        </div>
        {isCollapsed ? null : teamData.jobs.map((job, index) => <JobComponent key = {`job-${teamData.name}-${index}`} checked = {checkedJobs[job.name]} updateJobCheck = {updateJobCheck} jobData = {job}/>)}
        <CustomButton onClick = {() => setIsCollapsed(!isCollapsed)}>{isCollapsed ? "Expand" : "Collapse"}</CustomButton>
        </div>
    )
}

export default TeamComponent;