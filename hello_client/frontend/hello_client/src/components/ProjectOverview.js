import React from 'react';
import AddStory from './ProjectOverview/AddStory/AddStory';
import OverviewButtons from './ProjectOverview/OverviewButtons/OverviewButtons';
import ProjectDescription from './ProjectOverview/ProjectDescription/ProjectDescription';
import Todo from './ProjectOverview/Todo/Todo';

function Overview() {
  return (
    <div>
      <ProjectDescription/>
      <OverviewButtons/>
      <Todo/>
      <AddStory/>
    </div>
  )
}

export default Overview;