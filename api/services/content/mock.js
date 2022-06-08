import { handleResponse, mockPendingPromise } from '../../utils';

export default ($axios) => {
    return {
        getAllLevels(authToken, callback, errorHandler) {
            console.log(`API Call for "getAllLevels"`);
            handleResponse(mockPendingPromise([
                {
                    level: 1,
                    title: "Welcome to Web3",
                    description: "Web3 (also known as Web 3.0 and sometimes stylized as web3) is an idea for a new iteration of the World Wide Web based on blockchain technology, which incorporates concepts such as decentralization and token-based economics.",
                    tags: [
                        {
                            id: "introduction",
                            display: "Introduction"
                        },
                        {
                            id: "web3",
                            display: "Web3"
                        },
                        {
                            id: "nfts",
                            display: "NFTs"
                        }
                    ],
                    counts: {
                        total: 9,
                        videos: 4,
                        references: 5,
                        time: {
                            required: 66,
                            unit: "mins"
                        },
                    },
                    levelTag: {
                        id: "beginner",
                        display: "Beginner"
                    },
                    userSpecifics: {
                        isAccessible: true,
                        videosCompleted: 2
                    }
                },
                {
                    level: 2,
                    title: "Why Blockchain",
                    description: "Web3 (also known as Web 3.0 and sometimes stylized as web3) is an idea for a new iteration of the World Wide Web based on blockchain technology, which incorporates concepts such as decentralization and token-based economics.",
                    tags: [
                        {
                            id: "introduction",
                            display: "Introduction"
                        },
                        {
                            id: "blockchain",
                            display: "Blockchain"
                        },
                        {
                            id: "currency",
                            display: "Currency"
                        }
                    ],
                    counts: {
                        total: 5,
                        videos: 3,
                        references: 2,
                        time: {
                            required: 62,
                            unit: "mins"
                        },
                    },
                    levelTag: {
                        id: "beginner",
                        display: "Beginner"
                    },
                    userSpecifics: {
                        isAccessible: false,
                    }
                },
                {
                    level: 3,
                    title: "Why Blockchain",
                    description: "Web3 (also known as Web 3.0 and sometimes stylized as web3) is an idea for a new iteration of the World Wide Web based on blockchain technology, which incorporates concepts such as decentralization and token-based economics.",
                    tags: [
                        {
                            id: "introduction",
                            display: "Introduction"
                        },
                        {
                            id: "blockchain",
                            display: "Blockchain"
                        },
                        {
                            id: "currency",
                            display: "Currency"
                        }
                    ],
                    counts: {
                        total: 5,
                        videos: 3,
                        references: 2,
                        time: {
                            required: 62,
                            unit: "mins"
                        },
                    },
                    levelTag: {
                        id: "beginner",
                        display: "Beginner"
                    },
                    userSpecifics: {
                        isAccessible: false,
                    }
                },
                {
                    level: 4,
                    title: "Why Blockchain",
                    description: "Web3 (also known as Web 3.0 and sometimes stylized as web3) is an idea for a new iteration of the World Wide Web based on blockchain technology, which incorporates concepts such as decentralization and token-based economics.",
                    tags: [
                        {
                            id: "introduction",
                            display: "Introduction"
                        },
                        {
                            id: "blockchain",
                            display: "Blockchain"
                        },
                        {
                            id: "currency",
                            display: "Currency"
                        }
                    ],
                    counts: {
                        total: 5,
                        videos: 3,
                        references: 2,
                        time: {
                            required: 62,
                            unit: "mins"
                        },
                    },
                    levelTag: {
                        id: "beginner",
                        display: "Beginner"
                    },
                    userSpecifics: {
                        isAccessible: false,
                    }
                }
            ]), callback, errorHandler);
        },
        getContentForLevel(levelNumber, callback, errorHandler) {
            console.log(`API Call for "getContentForLevel" with levelNumber ${levelNumber}`);
            const videoObject = {
                title: "What is web3",
                description: "The Web3 Academy with everything for everyone. Discover, Learn and Make friends!",
                coverImageId: "this-is-demo-id",
                tags: [
                    {
                        id: "introduction",
                        display: "Introduction"
                    },
                    {
                        id: "blockchain",
                        display: "Blockchain"
                    },
                ],
                userSpecifics: {
                    isCompleted: false
                }
            };
            const urlObject = {
                target: "https://levyne.com",
                banner: "s3id | url",
                title: "Levyne Metaverse",
                description: "Some quick example text to build on the card title and make up the bulk of the card's content."
            }
            handleResponse(mockPendingPromise(
                {
                    level: 1,
                    title: "Welcome to Web3",
                    description: "Web3 (also known as Web 3.0 and sometimes stylized as web3) is an idea for a new iteration of the World Wide Web based on blockchain technology, which incorporates concepts such as decentralization and token-based economics.",
                    tags: [
                        {
                            id: "introduction",
                            display: "Introduction"
                        },
                        {
                            id: "web3",
                            display: "Web3"
                        },
                        {
                            id: "nfts",
                            display: "NFTs"
                        }
                    ],
                    counts: {
                        total: 9,
                        videos: 4,
                        references: 5,
                        time: {
                            required: 66,
                            unit: "mins"
                        },
                    },
                    levelTag: {
                        id: "beginner",
                        display: "Beginner"
                    },
                    userSpecifics: {
                        isAccessible: true,
                        videosCompleted: 2
                    },
                    content: {
                        videos: [
                            JSON.parse(JSON.stringify(videoObject)),
                            JSON.parse(JSON.stringify(videoObject)),
                            JSON.parse(JSON.stringify(videoObject)),
                            JSON.parse(JSON.stringify(videoObject))
                        ],
                        references: [
                            JSON.parse(JSON.stringify(urlObject)),
                            JSON.parse(JSON.stringify(urlObject)),
                        ]
                    }
                },
            ), callback, errorHandler);
        }
    }
}