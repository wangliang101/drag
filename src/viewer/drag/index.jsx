import React, {useEffect} from 'react';
import './style.css'

const DragViewer = () => {
	
	const dragStart = (e) => {
		console.log('e', e)
		e.className += ' dragging'
		setTimeout(() => {
			e.className = 'invisible'
		}, 0);
	}



	
	useEffect(() => {
		const draggable = document.querySelector('.draggable');
		const droppables = document.querySelectorAll('.droppable');

		const dragEnd = (e) => {
			e.className = 'draggable'
		}
	
		const dragOver = (e) => {
			e.preventDefault()
		}
	
		const dragEnter = (e) => {
			e.preventDefault();
			e.className += ' drag-over'
		}
		const dragLeave = (e) => {
			e.className = 'droppable'
		}
		const dragDrop = (e) => {
			e.className = 'droppable';
			e.append(draggable)
		}
		
		for (const droppable of droppables) {
			droppable.addEventListener('dragover', dragOver);
			droppable.addEventListener('dragleave', dragLeave);
			droppable.addEventListener('dragenter', dragEnter);
			droppable.addEventListener('drop', dragDrop);
		}
	
		draggable.addEventListener('dragstart', dragStart);
		draggable.addEventListener('dragend', dragEnd);
		return () => {
			draggable.addEventListener('dragstart', dragStart);
			draggable.addEventListener('dragend', dragEnd);
		}
	},[])
	
	return(
		<div className='drag-viewer'>
			<div className="droppable">
				<div className="draggable" draggable="true"></div>
			</div>
			<div className="droppable"></div>
			<div className="droppable"></div>
			<div className="droppable"></div>  
			<div className="droppable"></div>
		</div>
	)
}

export default DragViewer;