abstract class TaskManager {
    abstract addTask(task: string): void;
    abstract listTasks(): string[];
}

class Project extends TaskManager {
    private tasks: Set<string> = new Set();

    addTask(task: string): void {
        this.tasks.add(task);
    }

    listTasks(): string[] {
        return Array.from(this.tasks);
    }
}

class DailyTasks extends TaskManager {
    private tasks: Set<string> = new Set();

    addTask(task: string): void {
        this.tasks.add(task);
    }

    listTasks(): string[] {
        return Array.from(this.tasks);
    }
}
