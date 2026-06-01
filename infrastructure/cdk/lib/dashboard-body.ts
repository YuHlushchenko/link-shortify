export interface DashboardProps {
  region: string;
  apiId: string;
  linksTableName: string;
  clicksTableName: string;
  redirectFunctionName: string;
  createLinkFunctionName: string;
  createLinkAnonFunctionName: string;
  getLinksFunctionName: string;
  updateLinkFunctionName: string;
  deleteLinkFunctionName: string;
  bulkDeleteLinksFunctionName: string;
  getClicksFunctionName: string;
  getNotificationsFunctionName: string;
  updateNotificationFunctionName: string;
  updateAllNotificationsFunctionName: string;
  claimLinksFunctionName: string;
  deleteAccountFunctionName: string;
  expireLinkFunctionName: string;
}

export function buildDashboardBody(p: DashboardProps): string {
  return JSON.stringify({
    widgets: [
      {
        type: "metric", x: 0, y: 0, width: 11, height: 6,
        properties: {
          title: "Redirect — Latency (ms)",
          metrics: [
            ["AWS/Lambda", "Duration", "FunctionName", p.redirectFunctionName, { stat: "p50", label: "p50" }],
            ["AWS/Lambda", "Duration", "FunctionName", p.redirectFunctionName, { stat: "p95", label: "p95" }],
            ["AWS/Lambda", "Duration", "FunctionName", p.redirectFunctionName, { stat: "p99", label: "p99" }],
          ],
          view: "timeSeries", stacked: false, region: p.region,
          yAxis: { left: { min: 0, max: 200 } }, period: 300,
        },
      },
      {
        type: "metric", x: 11, y: 0, width: 6, height: 6,
        properties: {
          title: "Redirect — Invocations / Errors / Throttles",
          metrics: [
            ["AWS/Lambda", "Invocations", "FunctionName", p.redirectFunctionName, { stat: "Sum", label: "Invocations", color: "#2ca02c" }],
            ["AWS/Lambda", "Errors", "FunctionName", p.redirectFunctionName, { stat: "Sum", label: "Errors", color: "#d62728" }],
            ["AWS/Lambda", "Throttles", "FunctionName", p.redirectFunctionName, { stat: "Sum", label: "Throttles", color: "#ff7f0e" }],
          ],
          view: "timeSeries", stacked: false, region: p.region,
          yAxis: { left: { min: 0 } }, period: 300,
        },
      },
      {
        type: "metric", x: 17, y: 0, width: 7, height: 6,
        properties: {
          title: "API Gateway — Requests / 4xx / 5xx",
          metrics: [
            ["AWS/ApiGateway", "Count", "ApiId", p.apiId, { stat: "Sum", label: "Requests", color: "#2ca02c" }],
            ["AWS/ApiGateway", "4XXError", "ApiId", p.apiId, { stat: "Sum", label: "4xx", color: "#ff7f0e" }],
            ["AWS/ApiGateway", "5XXError", "ApiId", p.apiId, { stat: "Sum", label: "5xx", color: "#d62728" }],
          ],
          view: "timeSeries", stacked: false, region: p.region,
          yAxis: { left: { min: 0 } }, period: 300,
        },
      },
      {
        type: "metric", x: 0, y: 6, width: 24, height: 6,
        properties: {
          title: "All Lambdas — Errors",
          metrics: [
            ["AWS/Lambda", "Errors", "FunctionName", p.redirectFunctionName, { stat: "Sum", label: "Redirect" }],
            ["AWS/Lambda", "Errors", "FunctionName", p.createLinkFunctionName, { stat: "Sum", label: "CreateLink" }],
            ["AWS/Lambda", "Errors", "FunctionName", p.createLinkAnonFunctionName, { stat: "Sum", label: "CreateLinkAnon" }],
            ["AWS/Lambda", "Errors", "FunctionName", p.getLinksFunctionName, { stat: "Sum", label: "GetLinks" }],
            ["AWS/Lambda", "Errors", "FunctionName", p.updateLinkFunctionName, { stat: "Sum", label: "UpdateLink" }],
            ["AWS/Lambda", "Errors", "FunctionName", p.deleteLinkFunctionName, { stat: "Sum", label: "DeleteLink" }],
            ["AWS/Lambda", "Errors", "FunctionName", p.bulkDeleteLinksFunctionName, { stat: "Sum", label: "BulkDelete" }],
            ["AWS/Lambda", "Errors", "FunctionName", p.getClicksFunctionName, { stat: "Sum", label: "GetClicks" }],
            ["AWS/Lambda", "Errors", "FunctionName", p.getNotificationsFunctionName, { stat: "Sum", label: "GetNotifications" }],
            ["AWS/Lambda", "Errors", "FunctionName", p.updateNotificationFunctionName, { stat: "Sum", label: "UpdateNotification" }],
            ["AWS/Lambda", "Errors", "FunctionName", p.updateAllNotificationsFunctionName, { stat: "Sum", label: "UpdateAllNotifications" }],
            ["AWS/Lambda", "Errors", "FunctionName", p.claimLinksFunctionName, { stat: "Sum", label: "ClaimLinks" }],
            ["AWS/Lambda", "Errors", "FunctionName", p.deleteAccountFunctionName, { stat: "Sum", label: "DeleteAccount" }],
            ["AWS/Lambda", "Errors", "FunctionName", p.expireLinkFunctionName, { stat: "Sum", label: "ExpireLink" }],
          ],
          view: "timeSeries", stacked: false, region: p.region,
          yAxis: { left: { min: 0 } }, period: 300,
        },
      },
      {
        type: "metric", x: 0, y: 12, width: 13, height: 6,
        properties: {
          title: "DynamoDB — Throttles / Errors",
          metrics: [
            ["AWS/DynamoDB", "ThrottledRequests", "TableName", p.linksTableName, { stat: "Sum", label: "Links Throttles", color: "#d62728" }],
            ["AWS/DynamoDB", "ThrottledRequests", "TableName", p.clicksTableName, { stat: "Sum", label: "Clicks Throttles", color: "#ff7f0e" }],
            ["AWS/DynamoDB", "SystemErrors", "TableName", p.linksTableName, { stat: "Sum", label: "Links Errors", color: "#9467bd" }],
            ["AWS/DynamoDB", "SystemErrors", "TableName", p.clicksTableName, { stat: "Sum", label: "Clicks Errors", color: "#8c564b" }],
          ],
          view: "timeSeries", stacked: false, region: p.region,
          yAxis: { left: { min: 0 } }, period: 300,
        },
      },
      {
        type: "metric", x: 13, y: 12, width: 11, height: 6,
        properties: {
          title: "ExpireLink — Invocations / Errors",
          metrics: [
            ["AWS/Lambda", "Invocations", "FunctionName", p.expireLinkFunctionName, { stat: "Sum", label: "Expired links", color: "#2ca02c" }],
            ["AWS/Lambda", "Errors", "FunctionName", p.expireLinkFunctionName, { stat: "Sum", label: "Errors", color: "#d62728" }],
          ],
          view: "timeSeries", stacked: false, region: p.region,
          yAxis: { left: { min: 0 } }, period: 3600,
        },
      },
    ],
  });
}
