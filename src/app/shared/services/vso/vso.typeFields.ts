import { vso } from './vso.mappings';


const allFields: string[] = [
  vso.id,
  vso.workItemType,

  vso.assignedTo,
  vso.availableDate,
  vso.blocking,
  vso.compliance,
  vso.createdDate,
  vso.customString08,
  vso.customString09,
  vso.detectedDate,
  vso.devDesignStatus,
  vso.devDesignUrl,
  vso.devOwner,
  vso.finishDate,
  vso.funcSpecStatus,
  vso.funcSpecUrl,
  vso.hotBug,
  vso.impactedBranch,
  vso.issueSubType,
  vso.issueType,
  vso.iteration,
  vso.measureType,
  vso.nodeName,
  vso.originalEstimate,
  vso.pmOwner,
  vso.priority,
  vso.product,
  vso.productFamily,
  vso.qualityOwner,
  vso.qualityPlanUrl,
  vso.rank,
  vso.release,
  vso.releaseType,
  vso.remainingDays,
  vso.remainingDevDays,
  vso.resolution,
  vso.resolvedDate,
  vso.risk,
  vso.riskComment,
  vso.scenarioSpecStatus,
  vso.scenarioSpecUrl,
  vso.shortname,
  vso.showOnReport,
  vso.startDate,
  vso.state,
  vso.substatus,
  vso.tags,
  vso.triage,
  vso.title,
];

const bugFields: string[] = [
  vso.id,
  vso.workItemType,

  vso.availableDate,
  vso.blocking,
  vso.customString09,
  vso.hotBug,
  vso.impactedBranch,
  vso.issueSubType,
  vso.issueType,
  vso.iteration,
  vso.nodeName,
  vso.priority,
  vso.release,
  vso.resolution,
  vso.state,
  vso.substatus,
  vso.title,
  vso.triage,
];

const deliverableFields: string[] = [
  vso.id,
  vso.workItemType,

  vso.assignedTo,
  vso.availableDate,
  vso.devDesignStatus,
  vso.devDesignUrl,
  vso.devOwner,
  vso.funcSpecStatus,
  vso.funcSpecUrl,
  vso.iteration,
  vso.originalEstimate,
  vso.pmOwner,
  vso.qualityOwner,
  vso.rank,
  vso.release,
  vso.releaseType,
  vso.remainingDays,
  vso.remainingDevDays,
  vso.risk,
  vso.riskComment,
  vso.shortname,
  vso.state,
  vso.tags,
  vso.title,
  vso.compliance
];

const measureFields: string[] = [
  vso.id,
  vso.workItemType,

  vso.assignedTo,
  vso.availableDate,
  vso.customString08,
  vso.iteration,
  vso.measureType,
  vso.priority,
  vso.rank,
  vso.shortname,
  vso.showOnReport,
  vso.state,
  vso.substatus,
  vso.tags,
  vso.title,
];

const problemRecordFields: string[] = [
  vso.id,
  vso.workItemType,

  vso.areaPath,
  vso.createdDate,
  vso.detectedDate,
  vso.finishDate,
  vso.nodeName,
  vso.resolvedDate,
  vso.startDate,
  vso.state,
  vso.tags,
  vso.title,
];

const scenarioFields: string[] = [
  vso.id,
  vso.workItemType,

  vso.assignedTo,
  vso.customString08,
  vso.devOwner,
  vso.iteration,
  vso.pmOwner,
  vso.qualityOwner,
  vso.qualityPlanUrl,
  vso.rank,
  vso.release,
  vso.risk,
  vso.riskComment,
  vso.scenarioSpecStatus,
  vso.scenarioSpecUrl,
  vso.state,
  vso.tags,
  vso.title,
];


export {
  allFields,
  bugFields,
  deliverableFields,
  measureFields,
  problemRecordFields,
  scenarioFields,
};
