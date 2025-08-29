export const onDragStart = (event)=>{
    event.dataTransfer.effectAllowed = 'move';
};

export const onDragOver = (event)=>{
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
}