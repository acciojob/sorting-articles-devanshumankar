//your JS code here. If required.
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil',
    'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans',
    'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

bands.sort((a, b) => {
    a = a.toLowerCase();
    b = b.toLowerCase();
    if (a.startsWith("a ") || a.startsWith("an ") || a.startsWith("the ")) {
        a = a.slice(a.indexOf(" ") + 1)
    }
    if (b.startsWith("a ") || b.startsWith("an ") || b.startsWith("the ")) {
        b = b.slice(b.indexOf(" ") + 1)
    }
    return a.localeCompare(b);
})
const ul=document.querySelector("ul")
bands.forEach((ele)=>{
	const temp=document.createElement("li")
	temp.id="band";
	temp.textContent=ele;
	ul.appendChild(temp)
})

