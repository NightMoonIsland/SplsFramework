module.exports = {
    'development': {
        'connector': [
            {
                'id': 'connector-server-1',
                'host': '127.0.0.1',
                'port': 4050,
                'clientPort': 3050,
                'frontend': true,
                'args': '--inspect=10001'
            }
        ],
        'chat': [
            { 'id': 'chat-server-1', 'host': '127.0.0.1', 'port': 6050, 'args': '--inspect=10002' }
        ],
        'gate': [
            {
                'id': 'gate-server-1',
                'host': '127.0.0.1',
                'clientPort': 3014,
                'frontend': true,
                'args': '--inspect=10003'
            }
        ]
    },
    'production': {
        'connector': [
            { 'id': 'connector-server-1', 'host': '127.0.0.1', 'port': 4050, 'clientPort': 3050, 'frontend': true },
            { 'id': 'connector-server-2', 'host': '127.0.0.1', 'port': 4051, 'clientPort': 3051, 'frontend': true },
            { 'id': 'connector-server-3', 'host': '127.0.0.1', 'port': 4052, 'clientPort': 3052, 'frontend': true }
        ],
        'chat': [
            { 'id': 'chat-server-1', 'host': '127.0.0.1', 'port': 6050 },
            { 'id': 'chat-server-2', 'host': '127.0.0.1', 'port': 6051 },
            { 'id': 'chat-server-3', 'host': '127.0.0.1', 'port': 6052 }
        ],
        'gate': [
            { 'id': 'gate-server-1', 'host': '127.0.0.1', 'clientPort': 3014, 'frontend': true }
        ]
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2NvbmZpZy9zZXJ2ZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sQ0FBQyxPQUFPLEdBQUc7SUFDYixhQUFhLEVBQUU7UUFDWCxXQUFXLEVBQUU7WUFDVDtnQkFDSSxJQUFJLEVBQUUsb0JBQW9CO2dCQUMxQixNQUFNLEVBQUUsV0FBVztnQkFDbkIsTUFBTSxFQUFFLElBQUk7Z0JBQ1osWUFBWSxFQUFFLElBQUk7Z0JBQ2xCLFVBQVUsRUFBRSxJQUFJO2dCQUNoQixNQUFNLEVBQUUsaUJBQWlCO2FBQzVCO1NBQ0o7UUFDRCxNQUFNLEVBQUU7WUFDSixFQUFDLElBQUksRUFBRSxlQUFlLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxpQkFBaUIsRUFBQztTQUN4RjtRQUNELE1BQU0sRUFBRTtZQUNKO2dCQUNJLElBQUksRUFBRSxlQUFlO2dCQUNyQixNQUFNLEVBQUUsV0FBVztnQkFDbkIsWUFBWSxFQUFFLElBQUk7Z0JBQ2xCLFVBQVUsRUFBRSxJQUFJO2dCQUNoQixNQUFNLEVBQUUsaUJBQWlCO2FBQzVCO1NBQ0o7S0FDSjtJQUNELFlBQVksRUFBRTtRQUNWLFdBQVcsRUFBRTtZQUNULEVBQUMsSUFBSSxFQUFFLG9CQUFvQixFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUM7WUFDckcsRUFBQyxJQUFJLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBQztZQUNyRyxFQUFDLElBQUksRUFBRSxvQkFBb0IsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFDO1NBQ3hHO1FBQ0QsTUFBTSxFQUFFO1lBQ0osRUFBQyxJQUFJLEVBQUUsZUFBZSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQztZQUMxRCxFQUFDLElBQUksRUFBRSxlQUFlLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDO1lBQzFELEVBQUMsSUFBSSxFQUFFLGVBQWUsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUM7U0FDN0Q7UUFDRCxNQUFNLEVBQUU7WUFDSixFQUFDLElBQUksRUFBRSxlQUFlLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUM7U0FDckY7S0FDSjtDQUNKLENBQUMifQ==