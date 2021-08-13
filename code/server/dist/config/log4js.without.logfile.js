// 不写日志文件  示例配置文件。
module.exports = {
    'appenders': {
        'displayConsole': {
            'type': 'console'
        },
    },
    'categories': {
        'default': {
            'appenders': [
                /*"other",*/ 'displayConsole'
            ],
            'level': 'debug'
        }
    },
    'replaceConsole': true,
    'prefix': '${opts:serverId} ',
    'lineDebug': false,
    'errorStack': true
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nNGpzLndpdGhvdXQubG9nZmlsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2NvbmZpZy9sb2c0anMud2l0aG91dC5sb2dmaWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGtCQUFrQjtBQUVsQixNQUFNLENBQUMsT0FBTyxHQUFHO0lBQ2IsV0FBVyxFQUFFO1FBQ1QsZ0JBQWdCLEVBQUU7WUFDZCxNQUFNLEVBQUUsU0FBUztTQUNwQjtLQVVKO0lBQ0QsWUFBWSxFQUFFO1FBQ1YsU0FBUyxFQUFFO1lBQ1AsV0FBVyxFQUFFO2dCQUNULFlBQVksQ0FBQSxnQkFBZ0I7YUFDL0I7WUFDRCxPQUFPLEVBQUUsT0FBTztTQUNuQjtLQUNKO0lBQ0QsZ0JBQWdCLEVBQUUsSUFBSTtJQUN0QixRQUFRLEVBQUUsbUJBQW1CO0lBQzdCLFdBQVcsRUFBRSxLQUFLO0lBQ2xCLFlBQVksRUFBRSxJQUFJO0NBQ3JCLENBQUMifQ==