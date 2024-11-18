abstract class VoteSystem {
    protected votes: Record<string, number> = {};
  
    abstract voteFor(candidate: string): void;
  
    abstract getResults(): object;
  }
  
  class Election extends VoteSystem {
    voteFor(candidate: string): void {
      if (this.votes[candidate]) {
        this.votes[candidate] += 1;
      } else {
        this.votes[candidate] = 1;
      }
      console.log(`Voto registrado para ${candidate}.`);
    }
  
    getResults(): object {
      return this.votes;
    }
  }
  
  class Poll extends VoteSystem {
    voteFor(candidate: string): void {
      if (this.votes[candidate]) {
        this.votes[candidate] += 1;
      } else {
        this.votes[candidate] = 1;
      }
      console.log(`Voto registrado para ${candidate}.`);
    }
  
    getResults(): object {
      return Object.entries(this.votes)
        .sort((a, b) => b[1] - a[1])
        .reduce((result, [candidate, votes]) => {
          result[candidate] = votes;
          return result;
        }, {} as Record<string, number>);
    }
  }
  
  const election = new Election();
  election.voteFor("Senhor Gosolino da silva");
  election.voteFor("Doutor Bigodone");
  election.voteFor("Nice Eunice Alice Felice dos santos");
  election.voteFor("Charles Xavier");
  console.log("Resultados da Eleição:", election.getResults());
  
  
  const poll = new Poll();
  poll.voteFor("Xiaomi");
  poll.voteFor("Samsung");
  poll.voteFor("Apple");
  poll.voteFor("Apple");
  poll.voteFor("Samsung");
  console.log("Resultados da Enquete:", poll.getResults());
  