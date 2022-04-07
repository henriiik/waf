import * as awsnative from "@pulumi/aws-native";

new awsnative.wafv2.WebACL(
	`web-acl-no-tags-no-description`,
	{
		// description: "test",
		defaultAction: { allow: {} },
		scope: "REGIONAL",
		visibilityConfig: {
			// trigger an update every time
			metricName: `${Date.now()}`,
			cloudWatchMetricsEnabled: false,
			sampledRequestsEnabled: false
		}
		// tags: [
		// 	{
		// 		key: "key",
		// 		value: "val"
		// 	}
		// ]
	},
	{
		ignoreChanges: ["tags", "description"]
	}
);

new awsnative.wafv2.WebACL(
	`web-acl-no-description`,
	{
		// description: "test",
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
	},
	{
		ignoreChanges: ["tags", "description"]
	}
);

new awsnative.wafv2.WebACL(
	`web-acl-no-tags`,
	{
		description: "test",
		defaultAction: { allow: {} },
		scope: "REGIONAL",
		visibilityConfig: {
			// trigger an update every time
			metricName: `${Date.now()}`,
			cloudWatchMetricsEnabled: false,
			sampledRequestsEnabled: false
		}
		// tags: [
		// 	{
		// 		key: "key",
		// 		value: "val"
		// 	}
		// ]
	},
	{
		ignoreChanges: ["tags", "description"]
	}
);
new awsnative.wafv2.WebACL(
	`web-acl`,
	{
		description: "test",
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
	},
	{
		ignoreChanges: ["tags", "description"]
	}
);
