# SzlakByto

## Aby uruchomić

w folderze projektu wykonaj polecenie
npm install

w folderze projektu wykonaj polecenie:
npm start

## O aplikacji

Aplikacja gromadząca informacje na temat pieszych szlaków długodystansowych w Polsce.
W widoku szczegółowym szlaku prezentowane są najważniejsze informacje o szlaku takie jak:

- długość trasy,
- szacunkowa liczba dni wędrówki
- pasma górskie i szczyty przez które prowadzi szlak,
- ważniejsze miejscowośći na trasie szlaku
- kolor szlaku

Aplikacja umożliwa także przełączanie między light/dark mode.

Wyszukiwanie szlaku odbwa się poprzez przeszukanie słownika wypełnionego słowami kluczowymi, co umożłiwia znalezienie szlaku np poprzez wpisanie miejscowośći przez którą szukany szlak przebiega.

### Planowany rozwój aplikacji:

- filmy na YT z przejściami szlaku.

- w widoku szczegółwym szlaku dodanie mapy (prawdopodobnie biblioteka leaflet) i dodanie GPX z przebiegem szlaku

- możłiwość dodawania szlaków do listy "Twoje szlaki" z flagami: zaplanowane i przebyte,

- dodanie informacje o schroniskach na trasie,

- aktualizacja wyszukiwarki z nową prezentacją danych (zapytanie wpisane do przeglądarki będzie wyświetlało wyniki pogrupowane wg kryteriów: nazwa szlaku, pasma górskie, szczyty i miejscowości) po wyborze jednego z wyników użytkownik uzyska listę szlaków dopasowanych do zapytania,

- aktualizacja funkcjonalności listy polecanych szlaków w zależności do tych które znalazły się na liście "Twoje szlaki",

- pobieranie informacji o lokalizacji i wyświetlanie szlaków najbliższych Twojej lokalizacji zamiast listy "Popularne szlaki" (ta będzie wyświetlana w przypadku odmowy dostępu do lokalizacji),

- dodanie nowego screenu do bottom tabs: Mapa, prezentująca mapę polski z naniesionymi symbolicznymi lokalizacjami wszystkich szlaków z możliwością uzyskania informacji jaki szlak kryje się pod konkretnym symbolem (forma popup lub pole informacyjne poniżej mapy)

- ekran rejestracji i logowania użytkownika

- zapisywanie i przechowywanie danych o użytkowniku, jego preferencjach i szlakach zapisanych w liście "Twoje szlaki"

- animowany splashscreen na otwarcie aplikacji
