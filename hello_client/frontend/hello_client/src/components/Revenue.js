import React from 'react'
import OverviewButtons from './ProjectOverview/OverviewButtons/OverviewButtons'
import ProjectDescription from './ProjectOverview/ProjectDescription/ProjectDescription'
import Todo from './ProjectOverview/Todo/Todo'
import RevenueTracker from './RevenueTracker/RevenueTracker/RevnueTracker'

function Revenue() {
    return (
        <div>
            <ProjectDescription/>
            <OverviewButtons/>
            <Todo/>
            <RevenueTracker/>
        </div>
    )
}

export default Revenue
