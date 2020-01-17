module.exports = {
    reporters: [
        'default',
        [
            'jest-junit',
            {
                outputDirectory: 'api/tests/outputs'
            },
        ],
    ]
}
