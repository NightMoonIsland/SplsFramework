module.exports = {
    'appenders': {
        'console': {
            'type': 'console'
        },
        'con-log': {
            'type': 'file',
            'filename': '${opts:base}/logs/con-log-${opts:serverId}.log',
            'pattern': 'connector',
            'maxLogSize': 1048576,
            'layout': {
                'type': 'basic'
            },
            'backups': 5
        },
        'rpc-log': {
            'type': 'file',
            'filename': '${opts:base}/logs/rpc-log-${opts:serverId}.log',
            'maxLogSize': 1048576,
            'layout': {
                'type': 'basic'
            },
            'backups': 5
        },
        'forward-log': {
            'type': 'file',
            'filename': '${opts:base}/logs/forward-log-${opts:serverId}.log',
            'maxLogSize': 1048576,
            'layout': {
                'type': 'basic'
            },
            'backups': 5
        },
        'rpc-debug': {
            'type': 'file',
            'filename': '${opts:base}/logs/rpc-debug-${opts:serverId}.log',
            'maxLogSize': 1048576,
            'layout': {
                'type': 'basic'
            },
            'backups': 5
        },
        'crash-log': {
            'type': 'file',
            'filename': '${opts:base}/logs/crash.log',
            'maxLogSize': 1048576,
            'layout': {
                'type': 'basic'
            },
            'backups': 5
        },
        'admin-log': {
            'type': 'file',
            'filename': '${opts:base}/logs/admin.log',
            'maxLogSize': 1048576,
            'layout': {
                'type': 'basic'
            },
            'backups': 5
        },
        'pinus': {
            'type': 'file',
            'filename': '${opts:base}/logs/pinus-${opts:serverId}.log',
            'maxLogSize': 1048576,
            'layout': {
                'type': 'basic'
            },
            'backups': 5
        },
        'pinus-admin': {
            'type': 'file',
            'filename': '${opts:base}/logs/pinus-admin.log',
            'maxLogSize': 1048576,
            'layout': {
                'type': 'basic'
            },
            'backups': 5
        },
        'pinus-rpc': {
            'type': 'file',
            'filename': '${opts:base}/logs/pinus-rpc-${opts:serverId}.log',
            'maxLogSize': 1048576,
            'layout': {
                'type': 'basic'
            },
            'backups': 5
        }
    },
    'categories': {
        'default': {
            'appenders': ['console', 'pinus'],
            'level': 'debug'
        },
        'con-log': {
            'appenders': ['con-log'],
            'level': 'debug'
        },
        'rpc-log': {
            'appenders': ['rpc-log'],
            'level': 'debug'
        },
        'forward-log': {
            'appenders': ['forward-log'],
            'level': 'debug'
        },
        'rpc-debug': {
            'appenders': ['rpc-debug'],
            'level': 'debug'
        },
        'crash-log': {
            'appenders': ['crash-log'],
            'level': 'debug'
        },
        'admin-log': {
            'appenders': ['admin-log'],
            'level': 'debug'
        },
        'pinus-admin': {
            'appenders': ['pinus-admin'],
            'level': 'debug'
        },
        'pinus-rpc': {
            'appenders': ['pinus-rpc'],
            'level': 'debug'
        },
    },
    'prefix': '${opts:serverId} ',
    'replaceConsole': true,
    'lineDebug': false,
    'errorStack': true
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nNGpzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vY29uZmlnL2xvZzRqcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLENBQUMsT0FBTyxHQUFHO0lBQ2IsV0FBVyxFQUFFO1FBQ1QsU0FBUyxFQUFFO1lBQ1AsTUFBTSxFQUFFLFNBQVM7U0FDcEI7UUFDRCxTQUFTLEVBQUU7WUFDUCxNQUFNLEVBQUUsTUFBTTtZQUNkLFVBQVUsRUFBRSxnREFBZ0Q7WUFDNUQsU0FBUyxFQUFFLFdBQVc7WUFDdEIsWUFBWSxFQUFFLE9BQU87WUFDckIsUUFBUSxFQUFFO2dCQUNOLE1BQU0sRUFBRSxPQUFPO2FBQ2xCO1lBQ0QsU0FBUyxFQUFFLENBQUM7U0FDZjtRQUNELFNBQVMsRUFBRTtZQUNQLE1BQU0sRUFBRSxNQUFNO1lBQ2QsVUFBVSxFQUFFLGdEQUFnRDtZQUM1RCxZQUFZLEVBQUUsT0FBTztZQUNyQixRQUFRLEVBQUU7Z0JBQ04sTUFBTSxFQUFFLE9BQU87YUFDbEI7WUFDRCxTQUFTLEVBQUUsQ0FBQztTQUNmO1FBQ0QsYUFBYSxFQUFFO1lBQ1gsTUFBTSxFQUFFLE1BQU07WUFDZCxVQUFVLEVBQUUsb0RBQW9EO1lBQ2hFLFlBQVksRUFBRSxPQUFPO1lBQ3JCLFFBQVEsRUFBRTtnQkFDTixNQUFNLEVBQUUsT0FBTzthQUNsQjtZQUNELFNBQVMsRUFBRSxDQUFDO1NBQ2Y7UUFDRCxXQUFXLEVBQUU7WUFDVCxNQUFNLEVBQUUsTUFBTTtZQUNkLFVBQVUsRUFBRSxrREFBa0Q7WUFDOUQsWUFBWSxFQUFFLE9BQU87WUFDckIsUUFBUSxFQUFFO2dCQUNOLE1BQU0sRUFBRSxPQUFPO2FBQ2xCO1lBQ0QsU0FBUyxFQUFFLENBQUM7U0FDZjtRQUNELFdBQVcsRUFBRTtZQUNULE1BQU0sRUFBRSxNQUFNO1lBQ2QsVUFBVSxFQUFFLDZCQUE2QjtZQUN6QyxZQUFZLEVBQUUsT0FBTztZQUNyQixRQUFRLEVBQUU7Z0JBQ04sTUFBTSxFQUFFLE9BQU87YUFDbEI7WUFDRCxTQUFTLEVBQUUsQ0FBQztTQUNmO1FBQ0QsV0FBVyxFQUFFO1lBQ1QsTUFBTSxFQUFFLE1BQU07WUFDZCxVQUFVLEVBQUUsNkJBQTZCO1lBQ3pDLFlBQVksRUFBRSxPQUFPO1lBQ3JCLFFBQVEsRUFBRTtnQkFDTixNQUFNLEVBQUUsT0FBTzthQUNsQjtZQUNELFNBQVMsRUFBRSxDQUFDO1NBQ2Y7UUFDRCxPQUFPLEVBQUU7WUFDTCxNQUFNLEVBQUUsTUFBTTtZQUNkLFVBQVUsRUFBRSw4Q0FBOEM7WUFDMUQsWUFBWSxFQUFFLE9BQU87WUFDckIsUUFBUSxFQUFFO2dCQUNOLE1BQU0sRUFBRSxPQUFPO2FBQ2xCO1lBQ0QsU0FBUyxFQUFFLENBQUM7U0FDZjtRQUNELGFBQWEsRUFBRTtZQUNYLE1BQU0sRUFBRSxNQUFNO1lBQ2QsVUFBVSxFQUFFLG1DQUFtQztZQUMvQyxZQUFZLEVBQUUsT0FBTztZQUNyQixRQUFRLEVBQUU7Z0JBQ04sTUFBTSxFQUFFLE9BQU87YUFDbEI7WUFDRCxTQUFTLEVBQUUsQ0FBQztTQUNmO1FBQ0QsV0FBVyxFQUFFO1lBQ1QsTUFBTSxFQUFFLE1BQU07WUFDZCxVQUFVLEVBQUUsa0RBQWtEO1lBQzlELFlBQVksRUFBRSxPQUFPO1lBQ3JCLFFBQVEsRUFBRTtnQkFDTixNQUFNLEVBQUUsT0FBTzthQUNsQjtZQUNELFNBQVMsRUFBRSxDQUFDO1NBQ2Y7S0FDSjtJQUVELFlBQVksRUFBRTtRQUNWLFNBQVMsRUFBRTtZQUNQLFdBQVcsRUFBRSxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUM7WUFDakMsT0FBTyxFQUFFLE9BQU87U0FDbkI7UUFDRCxTQUFTLEVBQUU7WUFDUCxXQUFXLEVBQUUsQ0FBQyxTQUFTLENBQUM7WUFDeEIsT0FBTyxFQUFFLE9BQU87U0FDbkI7UUFDRCxTQUFTLEVBQUU7WUFDUCxXQUFXLEVBQUUsQ0FBQyxTQUFTLENBQUM7WUFDeEIsT0FBTyxFQUFFLE9BQU87U0FDbkI7UUFDRCxhQUFhLEVBQUU7WUFDWCxXQUFXLEVBQUUsQ0FBQyxhQUFhLENBQUM7WUFDNUIsT0FBTyxFQUFFLE9BQU87U0FDbkI7UUFDRCxXQUFXLEVBQUU7WUFDVCxXQUFXLEVBQUUsQ0FBQyxXQUFXLENBQUM7WUFDMUIsT0FBTyxFQUFFLE9BQU87U0FDbkI7UUFDRCxXQUFXLEVBQUU7WUFDVCxXQUFXLEVBQUUsQ0FBQyxXQUFXLENBQUM7WUFDMUIsT0FBTyxFQUFFLE9BQU87U0FDbkI7UUFDRCxXQUFXLEVBQUU7WUFDVCxXQUFXLEVBQUUsQ0FBQyxXQUFXLENBQUM7WUFDMUIsT0FBTyxFQUFFLE9BQU87U0FDbkI7UUFDRCxhQUFhLEVBQUU7WUFDWCxXQUFXLEVBQUUsQ0FBQyxhQUFhLENBQUM7WUFDNUIsT0FBTyxFQUFFLE9BQU87U0FDbkI7UUFDRCxXQUFXLEVBQUU7WUFDVCxXQUFXLEVBQUUsQ0FBQyxXQUFXLENBQUM7WUFDMUIsT0FBTyxFQUFFLE9BQU87U0FDbkI7S0FFSjtJQUVELFFBQVEsRUFBRSxtQkFBbUI7SUFDN0IsZ0JBQWdCLEVBQUUsSUFBSTtJQUN0QixXQUFXLEVBQUUsS0FBSztJQUNsQixZQUFZLEVBQUUsSUFBSTtDQUNyQixDQUFDIn0=