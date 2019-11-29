const tasks = [

    {id: 234, title: 'Create user registration API', timeSpent: 4, category: 'Backend', type: 'task'},

    {id: 235, title: 'Create user registration UI', timeSpent: 8, category: 'Frontend', type: 'task'},

    {id: 237, title: 'User sign-in via Google UI', timeSpent: 3.5, category: 'Frontend', type: 'task'},

    {id: 238, title: 'User sign-in via Google API', timeSpent: 5, category: 'Backend', type: 'task'},

    {id: 241, title: 'Fix account linking', timeSpent: 5, category: 'Backend', type: 'bug'},

    {id: 250, title: 'Fix wrong time created on new record', timeSpent: 1, category: 'Backend', type: 'bug'},

    {id: 262, title: 'Fix sign-in failed messages', timeSpent: 2, category: 'Frontend', type: 'bug'},

];

         const timeSpendToFrontEnd = tasks.reduce((acc,value) => {
            if (value.category === 'Frontend') acc+=value.timeSpent;
            return acc;

        },0);
console.log(timeSpendToFrontEnd);



const timeSpentToBug = tasks.reduce((acc,value) => {
    if (value.type === 'bug') acc+=value.timeSpent;
    return acc;
},0);
console.log(timeSpentToBug);

const filterTitle = tasks.filter(task => task.title.includes('UI'));
console.log(filterTitle.length);

const filterCategory = tasks.filter(task => task.category.includes('Backend'));

const filterCate = tasks.filter(task => task.category.includes('Frontend'));

console.log({frontend:filterCate.length,backend:filterCategory.length})

const f = tasks.map(task => {
    if (task.timeSpent > 4){
        return {title: task.title,category: task.category}
    }
});
console.log(f);