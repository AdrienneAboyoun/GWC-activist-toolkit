var factlist = ["In 1962, a B-52 bomber accidentally dropped a warhead on Greensboro, North Carolina, as it was breaking apart midair", "In 1979, at NORAD headquarters, a training tape was confused for an all-out Soviet attack", "Between 1950 and 1968 there were at least 1000 serious nuclear accicents recorded by the Pentagon", "On September 26, 1983, Stanislav Petrov saved the world by not reporting a supposed nuclear attack on the Soviet Union to his superiors...the attack turned out to be sunlight reflecting off of clouds", "On October 27, 1962, Vasili Arkhipov, a Soviet navy officer, was in a nuclear submarine near Cuba when US naval forces started dropping depth charges (a kind of explosive targeting submarines) on him. By declining to launch the sub's nuclear torpedo, he prevented World War III", "On January 25, 1995, Russian early warning radars suggested that an American first strike was incoming. Yeltsin declined to strike, and the rockets turned out to be a Norwegian-US joint research rocket, launched by scientists studying the northern lights.", "Everything you were taught about the Cuban Missile Crisis was a lie: the US instigated the conflict by placing missiles in Turkey, JFK's blockade was an act of war, and he delayed resolving the conflict to look tough on communism, one of his campaign pledges. The closest the world as come to nuclear apocalypse was largely manufactured by Kennedy for political optics, and finally resolved when Kennedy agreed to (secretly) remove the Turkish missiles, along with Krushchev (publicly) removing the Cuban ones"];
var count = 0;
var fact = document.getElementById("insertFact");
var factButton = document.getElementById("facts");

factButton.addEventListener("click", serveFact);

function serveFact(){
  fact.innerHTML = factlist[count];
  count++
  if (count == factlist.length) {
    count = 0;
  }
}

