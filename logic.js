// header
const header = document.querySelector('header');

const social_links_Line = document.getElementById('social_links_Line')
const social_links_div = document.getElementById('social_links_div')

// event listener to the window scroll event
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 30) {
        header.classList.replace('bg-[#202020e4]', 'bg-[#2a2a2ae4]');
        header.classList.replace('shadow-none', 'shadow-lg');

        social_links_Line.classList.replace('h-[25%]', 'h-[18%]');
        social_links_div.classList.replace('gap-y-5', 'gap-y-3');
    } else {
        header.classList.replace('bg-[#2a2a2ae4]', 'bg-[#202020e4]');
        header.classList.replace('shadow-lg', 'shadow-none');

        social_links_Line.classList.replace('h-[18%]', 'h-[25%]');
        social_links_div.classList.replace('gap-y-3', 'gap-y-5');
    }
});

function scrollToTop() {
    const div = document.getElementById('topDiv');
    div.scrollIntoView({ behavior: 'smooth' });
}

function scrollToAbout() {
    const div = document.getElementById('About');
    div.scrollIntoView({ behavior: 'smooth' });
}

function scrollToProjects() {
    const div = document.getElementById('Projects');
    div.scrollIntoView({ behavior: 'smooth' });
}

function scrollToContact() {
    const div = document.getElementById('Contact');
    div.scrollIntoView({ behavior: 'smooth' });
}


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting) {
            entry.target.classList.add('show')
        }
    })
})

const allElements = document.querySelectorAll('.noReveal')

allElements.forEach((el) => observer.observe(el))


const fruits = ['Apple', 'Banana', 'Orange'];

const moreProjects = [
    {
        title: 'Amazon-Clone',
        link: 'https://www.google.com/',
        data: `data data data data data data data data data data data data
            data data data data data data data data data data data data
            data data data data data data data data data data data data
            data data data data.`
    },
    {
        title: 'Product-Landing-Page',
        link: 'https://www.google.com/',
        data: `data data data data data data data data data data data data
            data data data data data data data data data data data data
            data data data data data data data data data data data data
            data data data data.`
    },
    {
        title: 'Document collection system',
        link: 'https://www.google.com/',
        data: `data data data data data data data data data data data data
            data data data data data data data data data data data data
            data data data data data data data data data data data data
            data data data data.`
    }
]

const listContainer = document.getElementById('allProjectsList');

const listItems = moreProjects.map((project) => {
    return `
    <div class="w-full min-h-[160px] h-max bg-[#484747] rounded-md p-4
    flex flex-col gap-y-4">
        <div class="w-full h-max flex items-center justify-between">
            <p class="font-medium text-[18px] leading-normal">
                ${project.title}
            </p>
            <a href="${project.link}" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" 
                width="22px" height="22px" 
                viewBox="0 0 256 256"><path fill="currentColor" 
                d="M208.31 75.68A59.78 59.78 0 0 0 202.93 28a8 8 0 0 0-6.93-4a59.75 59.75 0 0 0-48 24h-24a59.75 59.75 0 0 0-48-24a8 8 0 0 0-6.93 4a59.78 59.78 0 0 0-5.38 47.68A58.14 58.14 0 0 0 56 104v8a56.06 56.06 0 0 0 48.44 55.47A39.8 39.8 0 0 0 96 192v8H72a24 24 0 0 1-24-24a40 40 0 0 0-40-40a8 8 0 0 0 0 16a24 24 0 0 1 24 24a40 40 0 0 0 40 40h24v16a8 8 0 0 0 16 0v-40a24 24 0 0 1 48 0v40a8 8 0 0 0 16 0v-40a39.8 39.8 0 0 0-8.44-24.53A56.06 56.06 0 0 0 216 112v-8a58.14 58.14 0 0 0-7.69-28.32ZM200 112a40 40 0 0 1-40 40h-48a40 40 0 0 1-40-40v-8a41.74 41.74 0 0 1 6.9-22.48a8 8 0 0 0 1.1-7.69a43.81 43.81 0 0 1 .79-33.58a43.88 43.88 0 0 1 32.32 20.06a8 8 0 0 0 6.71 3.69h32.35a8 8 0 0 0 6.74-3.69a43.87 43.87 0 0 1 32.32-20.06a43.81 43.81 0 0 1 .77 33.58a8.09 8.09 0 0 0 1 7.65a41.72 41.72 0 0 1 7 22.52Z">
                </path></svg>
            </a>
        </div>
        <div class="w-full h-max text-[16px]">
            ${project.data}
        </div>
        <div class="w-full h-max text-[16px]">
            Php Xampp MySQL
        </div>
    </div>
    `;
  });

  listContainer.innerHTML = `${listItems.join('')}`;