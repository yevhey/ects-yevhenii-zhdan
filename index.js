class ECTS {
    constructor(score) {
        this.score = score;
    }

    ectsFromScore() {
        switch (this.score) {
            case this.score >= 90:
                return 'A';
            case this.score >= 82:
                return 'B';
            case this.score >= 74:
                return 'C';
            case this.score >= 65:
                return 'D';
            case this.score >= 60:
                return 'E';
            case this.score < 60:
                return 'F';
            default:
                return 'Invalid score';
        }
    }
}

module.exports = ECTS;
