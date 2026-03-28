const translator = {
    polish: {
        menu_about: "O NAS",
        menu_sections: "SEKCJE",
        menu_projects: "PROJEKTY",
        lang_switch: "ENGLISH",
        about_title: "O NAS",
        about_subtitle: "Czym się zajmujemy?",
        about_text: "Jesteśmy nowym kołem naukowym założonym na Akademii Górniczo-Hutniczej w 2025 r. Zajmujemy się elektroniką oraz muzyką. Tworzymy od zera własny elektroniczny sprzęt muzyczny, aby potem na nim grać i tworzyć za jego pomocą muzykę.",
        about_subtitle_2: "Skąd wzięła się nazwa HARDWIRE?",
        about_text_2: "HARD - muzyka przez nas grana to różne gatunki muzyki typu hard, a WIRE - od tego, że zajmujemy się elektroniką.",
        about_subtitle_3: "Skąd pomysł na koło o tematyce muzycznej na uczelni technicznej?",
        about_text_3: "Zainteresowanie studentów AGH muzyką jest większe niż mogłoby się wydawać, a dotychczas nie mieli oni możliwości uczestniczenia w kole naukowym o takiej tematyce, dlatego mamy nadzieję, że nasze koło pomoże im rozwinąć swoje pasje.",
        about_text_4: "Po więcej informacji odwiedź stronę naszego koła na SKN AGH",
        about_text_5: "Oraz nasze media społecznościowe:",
        sections_title: "SEKCJE",
        menu_sec_build: "BUDOWA SPRZĘTU",
        menu_sec_programming: "PROGRAMOWANIE",
        menu_sec_dj: "SEKCJA DJ-SKA",
        menu_sec_producers: "SEKCJA PRODUCENCKA",
        menu_sec_podcast: "PODCAST",
        projects_title: "PROJEKTY",
        proj_electr_flute: "ELEKTRONICZNY FLET",
        proj_synth: "SYNTEZATOR MODULARNY",
        proj_theremin: "THEREMIN",
        proj_piano: "PIANOLA",
        hardware_title: "BUDOWA SPRZĘTU",
        hardware_build_text: "Sekcja budowy sprzętu składa się z elektroników, którzy wymyślają, jak zrealizować pomysł na projekt. Następnie tworzą schematy oraz projektują płytki pcb w programach do tego przeznaczonych (np. KiCad lub Altium). Finalnie sami lutują komponenty i montują wszystko razem jako muzyczne urządzenie. ",
        programming_title: "PROGRAMOWANIE",
        programming_text: "Programiści zajmują się cyfrową częścią naszych projektów. Jeśli elektronicy nie są w stanie zrobić czegoś analogowo (lub bardziej wydajne jest po prostu zrobienie czegoś w sposób cyfrowy) nasi programiści napiszą kod (głównie w języku C) odpowiedni do takiego projektu.",
        dj_title: "SEKCJA DJ-SKA",
        dj_text: "Uczą dj-owania. Czyli, przede wszystkim, jak grać na dj-ce i robić płynne przejścia między kolejnymi utworami oraz czym się kierować dobierając muzykę zależnie od widowni.",
        music_prod_title: "SEKCJA PRODUCENCKA",
        music_prod_text: "Producenci obecnie tworzą muzykę w programach takich jak m.in FL Studio, Reaper czy Ableton, ale docelowo będą to robić na instrumentach zbudowanych przez elektroników i zaprogramowanych przez programistów.",
        podcast_title: "PODCAST",
        podcast_text: "Sekcja podcast przeprowadza sondy uliczne na tematy muzyczne oraz wywiady z osobami z sekcji producenckiej na temat stworzonej przez nich muzyki. Komentują oraz dzielą się ze słuchaczami tymi nowymi kawałkami. ",
        electr_flute_title: "ELEKTRONICZNY FLET",
        electr_flute_text: "Działa jak zwykły flet tylko... elektroniczny.",
        electr_flute_subtitle: "Jak jest zbudowany?",
        electr_flute_text_2: " Obudowa została wydrukowana na drukarce 3D. Ustnik składa się z mikrofonu, w który muzyk dmucha jak w zwykły ustnik, a przyciski do grania konkretnych dźwięków są jak w tradycyjnym instrumencie. Następnie napisany przez programistów program wgrany w chip RP2040 (z mikrokontrolera Raspberry Pi) odczytuje wartości z mikrofonu (w zależności od siły podmuchu) oraz jaki przycisk został kliknięty. Po przetworzeniu tych informacji sygnał idzie na wyjście do głośników. I tak możemy usłyszeć elektroniczny dźwięk z fletu. ",
        synth_title: "SYNTEZATOR MODULARNY",
        synth_text: "Nie taki zwykły syntezator modularny, bo ... bez kabli!",
        synth_subtitle: "Czym w ogóle jest syntezator modularny?",
        synth_text_2: "Jest to rodzaj syntezatora, który składa się z niezależnych od siebie modułów (takich jak oscylatory, filtry itp.). Aby np. sygnał z oscylatora przepuścić przez filtr trzeba to połączyć kablem. Przy dużych ilościach takich połączeń robi się to mało wygodne i wprowadza chaos.",
        synth_subtitle_2: "Co ma za zadanie robić nasz syntezator?",
        synth_text_3: "To samo, ale poszczególne sygnały łączą się ze sobą za pomocą naciśnięcia przycisku, nie trzeba podpinać żadnych kabli. Do tego można wkładać do przegródek dowolne moduły jakie w danej chwili są potrzebne. Połączenie modułów z naszym urządzeniem umożliwiają tzw. pogo piny, czyli konektory przewodzące prąd przy styku pinu z odpowiednim do tego podłożem. ",
        ther_title: "THEREMIN",
        ther_text: "Mogło by się wydawać, że to magia, ale to właściwie tylko fizyka.",
        ther_subtitle: "Jak działa ten instrument?",
        ther_text_2: "Theremin to instrument, w którym częstotliwość i głośność dźwięku zmienia się za pomocą ruchu rąk wokół anten generujących pole magnetyczne. Wszystko odbywa się bez dotyku anten.",
        piano_title: "PIANOLA",
        piano_subtitle: "Jak działały pierwsze pianole?",
        piano_text: "Odtwarzane były utwory nagrane na taśmie papierowej pokrytej otworami, na której wycięcia odpowiadały wysokości i czasowi trwania dźwięków. Taśma przesuwała się nad cylindrem z otworami. Strumień powietrza wpadający przez ten otwór sprawiał, że młoteczek pianina uderzał w strunę. Trwało to do chwili przesunięcia taśmy w miejsce bez wyciętego otworu.",
        btn_lang: "ENGLISH"
    },
    english: {
        menu_about: "ABOUT US",
        menu_sections: "SECTIONS",
        menu_projects: "PROJECTS",
        lang_switch: "POLISH",
        about_title: "ABOUT US",
        about_subtitle: "What do we do?",
        about_text: "We're a new student research group founded on the AGH University of Science and Technology in 2025. We specialize in electronics and music. We make our own electronic music equipment from scratch to play and create music with it.",
        about_subtitle_2: "Where does the name HARDWIRE come from?",
        about_text_2: "HARD - the music we play is various types of hard music, and WIRE because we specialize in electronics",
        about_subtitle_3: "Where did the idea for the music club at a technical univeristy come from? ",
        about_text_3: "Students of the AGH University are more interested in music than it appears, and until now they didn't have the chance to participate in student's club like this. That's why we hope that we can help them to develop their passions. ",
        about_text_4: "For more information check out our SKN AGH website",
        about_text_5: "And our social media:",
        sections_title: "SECTIONS",
        menu_sec_build: "HARDWARE",
        menu_sec_programming: "PROGRAMMING",
        menu_sec_dj: "DJ SECTION",
        menu_sec_producers: "RECORD PRODUCERS",
        menu_sec_podcast: "PODCAST",
        projects_title: "PROJECTS",
        proj_electr_flute: "ELECTRONIC FLUTE",
        proj_synth: "MODULAR SYNTHESIZER",
        proj_theremin: "THEREMIN",
        proj_piano: "PLAYER PIANO",
        hardware_title: "HARDWARE",
        hardware_build_text: "The hardware section are electronics engineers who comes up with ideas how to build a certain project. They create PCB's using dedicated software (e.g. KiCad or Altium). Finally, they solder components and assemble everything into a musical device.",
        programming_title: "PROGRAMMING",
        programming_text: "Programmers work on digital part of our projects. If electronic engineers aren't able to do something analog (or it's simply more efficient to do something digitally) our programmer write code (usually in C) appropriate for the project.",
        dj_title: "DJ SECTION",
        dj_text: "They teach DJing. Specifically, how to play on the dj decks and make smooth segues and what to bear in mind while selecting the music for the audience. ",
        music_prod_title: "RECORD PRODUCERS",
        music_prod_text: "Record producers are currently making music in programms like FL Studio, Reaper or Ableton but as a target they will do it with instrument created by electonic enginners and programmers. ",
        podcast_title: "PODCAST",
        podcast_text: "The podcast section conducts street surveys on music topics and interviews with record producers about the music created by them. Podcasters comment and share these new tracks with listeners.",
        electr_flute_title: "ELECTRONIC FLUTE",
        electr_flute_text: "Works like normal flute, but ... electronic.",
        electr_flute_subtitle: "How is this built?",
        electr_flute_text_2: "The case was 3D printed. The mouthpiece consists of a microphone, into which the musician blows like a regular mouthpiece, and the buttons for playing specific notes are as on a traditional instrument. Then, a program written by the programmers, loaded onto the RP2040 chip (from the Raspberry Pi microcontroller), reads the values ​​from the microphone (depending on the blowing force) and which button was pressed. After processing this information, the signal is output to the speakers. This is how we hear the electronic sound of the flute.",
        synth_title: "MODULAR SYNTHESIZER",
        synth_text: "Not so usual because ... has no cables!",
        synth_subtitle: "Anyway, what is a modular synth?",
        synth_text_2: "It's a type of synth composed of independent modules (such as oscillator, modules etc.). For example, to pass the oscillator signal through a filter it is necessary to connect it with a cable. With a large amount of such connections it is inconvenient and makes chaos. ",
        synth_subtitle_2: "What is our synth is supposed to do?",
        synth_text_3: "The same thing, but individual signals connect with the press of the button, no need to connect cables. It is also posiible to insert any module into the compartments. Conncecting the modules to our device is possible using pogo pins - connector that conduct electricity when the pin contacts a suitable surface.",
        ther_title: "THEREMIN",
        ther_text: "It appears to be magic, but it's just physics.",
        ther_subtitle: "How does this instrument work?",
        ther_text_2: "The theremin is an instrument in which the frequency and volume of sound are varied by moving the hands around antennas that generate a magnetic field. All this is accomplished without touching the antennas.",
        piano_title: "PLAYER PIANO",
        piano_subtitle: "How did first player pianos work?",
        piano_text: "The pieces played were recorded on a paper tape covered with holes, with cutouts corresponding to the pitch and duration of the notes. The tape moved over a cylinder with holes. A stream of air entering through the hole caused a piano hammer to strike a string. This continued until the tape was moved to a location without a cutout.",
        btn_lang: "POLISH"
    }
};

let currentLanguage = 'polish';

function switchLanguage() {
    currentLanguage = (currentLanguage === 'polish') ? 'english' : 'polish';
    
    document.querySelectorAll('[trans]').forEach(element => {
        const key = element.getAttribute('trans');
        if (translator[currentLanguage][key]) {
            element.textContent = translator[currentLanguage][key];
        }
    });

    const lang_button = document.getElementById('lang_switch');
    if (lang_button) {
        lang_button.textContent = translator[currentLanguage].btn_lang;
    }
}

function showView(id) {
    const views = document.querySelectorAll('#content > div');
    const menu = document.getElementById('menu');
    const photo_section = document.getElementById('photo_section');

    views.forEach(v => v.style.display = 'none');

    if (id === 'home' || !id) {
        menu.style.display = 'flex';
        if(photo_section) photo_section.style.display = 'block';
    } else {
        menu.style.display = 'none';
        if(photo_section) photo_section.style.display = 'none';

        const element = document.getElementById(id);
        if (element) {
            element.style.display = 'block';
            // Odśwież obrazki wewnątrz sekcji (jeśli są)
            const img = element.querySelector('img');
            if (img) img.src = img.src;
        }
    }
}

document.addEventListener('click', (e) => {
    const target = e.target;

    if (target.id === 'lang_switch') {
        switchLanguage();
        return;
    }

    const view = target.getAttribute('data_view') || target.getAttribute('data_view');
    
    if (view) {
        history.pushState({view}, '', `#${view}`);
        showView(view);
    }
});

window.addEventListener('popstate', e => {
    const view = (e.state && e.state.view) ? e.state.view : 'home';
    showView(view);
});


showView('home');