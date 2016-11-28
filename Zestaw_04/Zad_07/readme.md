Pokazać w jaki sposób odczytywać duże pliki linia po linii. Działanie zademonstrować
na przykładowym kodzie analizującym duży plik logów hipotetycznego serwera WWW, w
którym każda linia ma postać

08:55:36 192.168.0.1 GET /TheApplication/WebResource.axd 200

gdzie poszczególne wartości oznaczają czas, adres klienta, rodzaj żądania HTTP, nazwę
zasobu oraz status odpowiedzi.
W przykładowej aplikacji wydobyć listę adresów IP trzech klientów, którzy skierowali do
serwera aplikacji największą liczbę żądań.
Wynikiem działania programu powinien być przykładowy raport postaci:

12.34.56.78 143
23.45.67.89 113
123.245.167.289 89