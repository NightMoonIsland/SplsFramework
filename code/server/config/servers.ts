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
        'gate': [
            {
                'id': 'gate-server-1',
                'host': '127.0.0.1',
                'clientPort': 3014,
                'frontend': true,
                'args': '--inspect=10003'
            }
        ],
        'chat': [
            {'id': 'chat-server-1', 'host': '127.0.0.1', 'port': 6050, 'args': '--inspect=10002', 'frontend': true}
        ],
        'hall': [
            {'id': 'hall-server-1', 'host': '127.0.0.1', 'port': 6991, 'args': '--inspect=10005', 'frontend': true}
        ],
        'cache': [
            {'id': 'cache-server-1', 'host': '127.0.0.1', 'port': 6992, 'args': '--inspect=10006'}
        ],
    },
    'production': {
        'connector': [
            {'id': 'connector-server-1', 'host': '127.0.0.1', 'port': 4050, 'clientPort': 3050, 'frontend': true},
            {'id': 'connector-server-2', 'host': '127.0.0.1', 'port': 4051, 'clientPort': 3051, 'frontend': true},
            {'id': 'connector-server-3', 'host': '127.0.0.1', 'port': 4052, 'clientPort': 3052, 'frontend': true}
        ],
        'chat': [
            {'id': 'chat-server-1', 'host': '127.0.0.1', 'port': 6050},
            {'id': 'chat-server-2', 'host': '127.0.0.1', 'port': 6051},
            {'id': 'chat-server-3', 'host': '127.0.0.1', 'port': 6052}
        ],
        'gate': [
            {'id': 'gate-server-1', 'host': '127.0.0.1', 'clientPort': 3014, 'frontend': true}
        ]
    }
};
