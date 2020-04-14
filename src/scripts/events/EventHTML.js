//Authored by Billy Blackman
//The purpose of this component is to represent one event object with HTML


export const Event = (eventObject) => {
	return `
		<section class=“event”>
			<h2>${eventObject.name}</h2>
			<div>${eventObject.date}</div>
            <div>${eventObject.location}</div>
            <button id="deleteEvent--${eventObject.id}">Delete Event</button>
		</section>
	`	
}

