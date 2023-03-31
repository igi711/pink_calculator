var d = new Date();
theDay = d.getDay();
const footer = document.getElementById('footer')

switch(theDay)
{
    case 0:
        footer.innerHTML = "Semmi sem lehetetlen, semmi sem olyan nehéz, hogy ne lenne érdemes megpróbálni. /Rahaf Mohammed ";
    break;

    case 1:
        footer.innerHTML = "Képesnek kell lennünk rá, hogy bizonyos dolgokról azt mondjuk: Meg fogom próbálni, még ha meg vagyok győződve is róla, hogy tévedés lehet. Csak ha így élünk, tudunk valamit kezdeni az élettel. <br> /Carl Gustav Jung";
    break;

    case 2:
        footer.innerHTML = "Semmi nem marad ugyanaz, semmi nem marad változatlan. És hogy milyen módon változik meg valami, az csakis tőled függ. <br> /Neale Donald Walsch";
    break;

    case 3:
        footer.innerHTML = "Ha egy tojást külső erő tör össze, az élet véget ér. Ha belső erő, akkor egy élet kezdődik. A nagy dolgok mindig belülről indulnak el. <br> /Jim Kwik";
    break;

    case 4:
        footer.innerHTML = "Világunk átalakítására nincs szükség mágiára. Ami kell hozzá, az ott van mindnyájunkban. <br> /Joanne Kathleen Rowling";
    break;

    case 5:
        footer.innerHTML = "A legnagyobb öröm az életben megtenni azt, amire az emberek nem tartanak képesnek. <br> /Shey Stahl";
    break;
    
    case 6:
        footer.innerHTML = "Több erőnk van, mint akaratunk, s gyakran csak mi magunk előtt való mentségül képzeljük azt, hogy valami lehetetlen. <br> /Francois de La Rochefoucauld";
}
