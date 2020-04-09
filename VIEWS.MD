# Dasboard

- `/`
    - statystyki dzisiejszych zamówień (zdalne i lokalne)
    - listę rezerwacji i eventów zaplanowanych na dzisiaj

# Logowanie

- `/login`
    - pola na login i hasło
    - guzik do zalogowania (link do dashboardu)

# Widok dostępności stolików

- `/tables`
    - wbór daty i godziny
    - tabela z listą rezerwacji oraz wydarzeń
        - każda kolumna = 1 stolik
        - każdy wiersz = 30 minut
        - ma przypominać widok tygodnia w kalendarzu Google, gdzie w kolumnach zamiast dni są różne stoliki
        - po kliknięciu rezerwacji lub evetnu, przechodzimy na stronę szczegółów
- `/tables/booking/:id`
    - zawiera wszystkie informacje dotyczące rezerwacji
    - umożliwia edycję i zapisanie zmian
- `/tables/booking/new`
    - analigocznie do poprzedniej, bez początkowych rezweracji 
- `/tables/events/:id`
    - analigocznie do poprzedniej, dla eventów
- `/tables/events/new`
    - analigocznie do poprzedniej, dna eventów, bez początkowych rezweracji 

# Widok kelnera

- `/waiter`
    - tabela
        - w wierszach stoliki
        - w kolumnach różne rodzaje informacji (status, czas od ostatniej aktywności)
        - w ostatniej kolumnie dostępne akcje dla danego stolika
- `/waiter/order/new`
    - number stolika (edytowalny)
    - menu produktów dostępnych w restauracji
    - opcje wybranego produktu
    - zamówienie (zamówieone produkty z opcjami i ceną)
    - kwota zamówienia 
- `/waiter/order/:id`
    - jak powyższa

# Widok kuchni

- `/kitchen`
    - wyświetla listę zamówień w kolejności złożenia
    - lista musi zawietać:
        - numer stolika (lub zamówienia zdalnego)
        - pełne informacje dot. zamówionych dań
    - na liście musi być możliwość oznaczenia zamówienia jako zrealizowane