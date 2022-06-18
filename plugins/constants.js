export default (_, inject) => {
    const constants = {
        levelDifficulty: {
            1: "Beginner",
            2: "Intermediate",
            3: "Advanced"
        }
    }
    inject('constants', constants);
}