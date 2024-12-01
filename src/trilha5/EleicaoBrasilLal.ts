abstract class VoteSystem {
    abstract voteFor(candidate: string): void;
    abstract getResults(): object;
}

class Election extends VoteSystem {
    private votes: Record<string, number> = {};

    voteFor(candidate: string): void {
        if (this.votes[candidate]) {
            this.votes[candidate]++;
        } else {
            this.votes[candidate] = 1;
        }
    }

    getResults(): object {
        return this.votes;
    }
}

class Poll extends VoteSystem {
    private votes: Record<string, number> = {};

    voteFor(candidate: string): void {
        if (this.votes[candidate]) {
            this.votes[candidate]++;
        } else {
            this.votes[candidate] = 1;
        }
    }

    getResults(): object {
        const sortedResults = Object.entries(this.votes)
            .sort((a, b) => b[1] - a[1])
            .map(([candidate, votes]) => ({ candidate, votes }));
        return sortedResults;
    }
}
