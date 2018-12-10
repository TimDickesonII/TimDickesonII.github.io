class Project {
  constructor(name, link, desc, pic) {
    this.name = name;
    this.link = link;
    this.desc = desc;
    this.pic = pic;
  }
}

var projects = [
  new Project(
    "MovieSearchService",
    "https://moviesearchservice.herokuapp.com",
    "An interface to search shows and movies through themoviedb API",
    "moviesearchservice.png"
  ),
  new Project(
    "Pigeon Puncher",
    "https://github.com/imacubsfan23/pigeonpuncher",
    "An interface to search shows and movies through themoviedb API",
    "pigeonpuncher.png"
  ),
  new Project(
    "Clappy Bird",
    "https://www.youtube.com/watch?v=RoESkSNBo8A",
    "Took a previously made flappybird clone on Unity3D and revamped it to be controlled by clapping or saying 1-syllable words (i.e. \"Jump\" or \"Up\").",
    "clappybird.png"
  ),
  new Project(
    "Bloc Jams Music Player",
    "https://timdickesonii.netlify.com/",
    "A music player made during my time at Bloc to learn jQuery.",
    "blocjams.png"
  ),
  new Project(
    "plots2",
    "https://publiclab.org/wiki/plots2",
    "My first open source project contributing to.",
    "plots2.png"
  ),
  new Project(
    "STEMConstants",
    "https://github.com/imacubsfan23/STEMConstants",
    "My first open source project created as a ruby gem.",
    "stemconstants.png"
  ),
  new Project(
    "Bloccit",
    "https://pacific-shore-67613.herokuapp.com/",
    "A clone of Reddit made during my time at Bloc to practice Rails",
    "bloccit.png"
  ),
  new Project(
    "This",
    "https://imacubsfan23.github.io",
    "Portfolio-ception",
    "this.png"
  ),
];

document.open();
for(var i = 0; i < projects.length; i++){
  var project = projects[i];
  document.write(`<a class='project-link' href=${project.link}>
                    <div class="container">
                      <img class="project-picture" src="images/${project.pic}" alt=${project.name}/>
                      <div class="project-info">
                        <h2 class="project-name">${project.name}</h2>
                        <p class="project-description">${project.desc}</p>
                      </div>
                    </div>
                  </a>`);
}
document.close();
