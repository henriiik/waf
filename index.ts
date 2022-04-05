import * as awsnative from "@pulumi/aws-native";

const webAcl = new awsnative.wafv2.WebACL(`web-acl`, {
	defaultAction: { allow: {} },
	scope: "REGIONAL",
	visibilityConfig: {
		// trigger an update every time
		metricName: `${Date.now()}`,
		cloudWatchMetricsEnabled: false,
		sampledRequestsEnabled: false
	},
	tags: [
		{
			key: "key",
			value: "val"
		}
	]
});
