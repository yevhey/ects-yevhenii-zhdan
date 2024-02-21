class ECTS {
    constructor(score) {
        this.score = score;
    }

    ectsFromScore() {
        if (this.score >= 90) {
            return 'A';
        }
        if (this.score >= 82) {
            return 'B';
        }
        if (this.score >= 74) {
            return 'C';
        }
        if (this.score >= 65) {
            return 'D';
        }
        if (this.score >= 60) {
            return 'E';
        }

        return 'F';
    }
}

module.exports = ECTS;
