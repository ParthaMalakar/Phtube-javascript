function Draw() {
    const dataContainer = document.getElementById('data-container');
    dataContainer.textContent = '';
    const dataComedy = document.getElementById('data-comedy');
    dataComedy.textContent = '';
    const allButton = document.getElementById('alldata');
    allButton.classList.remove('bg-[#FF1F3D]')
    allButton.classList.add('bg-[#796e6eb2]')
    const allDrawingButton = document.getElementById('btn-comedy');
    allDrawingButton.classList.remove('bg-[#FF1F3D]')
    allDrawingButton.classList.add('bg-[#796e6eb2]')
    const MusicButton = document.getElementById('btn-apply');
    MusicButton.classList.remove('bg-[#FF1F3D]')
    MusicButton.classList.add('bg-[#796e6eb2]')
    const comedyButton = document.getElementById('btn-drawing');
    comedyButton.classList.remove('bg-[#796e6eb2]')
    comedyButton.classList.add('bg-[#FF1F3D]')
    loadDrawingData();
}
const loadDrawingData = async () => {
    const res = await fetch(` https://openapi.programming-hero.com/api/videos/category/${1005}`);
    const data = await res.json();
    const allDatas = data.data;
    displayDrawingData(allDatas);
    console.log(allDatas)
}
const displayDrawingData = (allDatas) => {


    if (allDatas.length === 0) {
        const dataContainer = document.getElementById('data-comedy');
        const dataCard = document.createElement('div');
        dataCard.classList = ` text-center flex justify-center`;
        dataCard.innerHTML = `
        <div>
            <figure><img class ="h-[140px] w-[140px] mt-20 ml-16" src="./Images/Icon.png" alt="Shoes" /></figure>
            <p class="mt-8 font-bold text-2xl">Oops!! Sorry, There is no <br> content here</p>
            </div>
            `;

        dataContainer.appendChild(dataCard);

    }

}