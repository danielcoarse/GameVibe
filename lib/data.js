export const categories = [
  {
    categoryName: 'Relaxing / Casual',
    categorySlug: 'relaxing-casual',
    categoryImage:
      'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWpveXN0aWNrIj48cGF0aCBkPSJNMjEgMTdhMiAyIDAgMCAwLTItMkg1YTIgMiAwIDAgMC0yIDJ2MmEyIDIgMCAwIDAgMiAyaDE0YTIgMiAwIDAgMCAyLTJ2LTJaIi8+PHBhdGggZD0iTTYgMTV2LTIiLz48cGF0aCBkPSJNMTIgMTVWOSIvPjxjaXJjbGUgY3g9IjEyIiBjeT0iNiIgcj0iMyIvPjwvc3ZnPg==',
    genres: [
      { id: 9, name: 'Puzzle', slug: 'puzzle' },
      { id: 13, name: 'Simulator', slug: 'simulator' },
      { id: 26, name: 'Quiz/Trivia', slug: 'quiz-trivia' },
      { id: 30, name: 'Pinball', slug: 'pinball' },
      { id: 35, name: 'Card & Board Game', slug: 'card-and-board-game' },
    ],
  },
  {
    categoryName: 'Adventurous / Immersive',
    categorySlug: 'adventurous-immersive',
    categoryImage:
      'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLW1vdW50YWluIj48cGF0aCBkPSJtOCAzIDQgOCA1LTUgNSAxNUgyTDggM3oiLz48L3N2Zz4=',
    genres: [
      { id: 2, name: 'Point-and-click', slug: 'point-and-click' },
      { id: 31, name: 'Adventure', slug: 'adventure' },
      { id: 12, name: 'Role-playing (RPG)', slug: 'role-playing-rpg' },
      { id: 34, name: 'Visual Novel', slug: 'visual-novel' },
      { id: 32, name: 'Indie', slug: 'indie' },
    ],
  },
  {
    categoryName: 'Strategic / Thoughtful',
    categorySlug: 'strategic-thoughtful',
    categoryImage:
      'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWRpY2UtMyI+PHJlY3Qgd2lkdGg9IjE4IiBoZWlnaHQ9IjE4IiB4PSIzIiB5PSIzIiByeD0iMiIgcnk9IjIiLz48cGF0aCBkPSJNMTYgOGguMDEiLz48cGF0aCBkPSJNMTIgMTJoLjAxIi8+PHBhdGggZD0iTTggMTZoLjAxIi8+PC9zdmc+',
    genres: [
      {
        id: 11,
        name: 'Real Time Strategy (RTS)',
        slug: 'real-time-strategy-rts',
      },
      { id: 15, name: 'Strategy', slug: 'strategy' },
      {
        id: 16,
        name: 'Turn-based strategy (TBS)',
        slug: 'turn-based-strategy-tbs',
      },
      { id: 24, name: 'Tactical', slug: 'tactical' },
      { id: 35, name: 'Card & Board Game', slug: 'card-and-board-game' },
    ],
  },
  {
    categoryName: 'Competitive / Exciting',
    categorySlug: 'competitive-exciting',
    categoryImage:
      'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWxhbmQtcGxvdCI+PHBhdGggZD0ibTEyIDggNi0zLTYtM3YxMCIvPjxwYXRoIGQ9Im04IDExLjk5LTUuNSAzLjE0YTEgMSAwIDAgMCAwIDEuNzRsOC41IDQuODZhMiAyIDAgMCAwIDIgMGw4LjUtNC44NmExIDEgMCAwIDAgMC0xLjc0TDE2IDEyIi8+PHBhdGggZD0ibTYuNDkgMTIuODUgMTEuMDIgNi4zIi8+PHBhdGggZD0iTTE3LjUxIDEyLjg1IDYuNSAxOS4xNSIvPjwvc3ZnPg==',
    genres: [
      { id: 36, name: 'MOBA', slug: 'moba' },
      { id: 5, name: 'Shooter', slug: 'shooter' },
      { id: 10, name: 'Racing', slug: 'racing' },
      { id: 14, name: 'Sport', slug: 'sport' },
      { id: 4, name: 'Fighting', slug: 'fighting' },
    ],
  },
  {
    categoryName: 'Action-packed / Intense',
    categorySlug: 'action-packed-intense',
    categoryImage:
      'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXN3b3JkcyI+PHBvbHlsaW5lIHBvaW50cz0iMTQuNSAxNy41IDMgNiAzIDMgNiAzIDE3LjUgMTQuNSIvPjxsaW5lIHgxPSIxMyIgeDI9IjE5IiB5MT0iMTkiIHkyPSIxMyIvPjxsaW5lIHgxPSIxNiIgeDI9IjIwIiB5MT0iMTYiIHkyPSIyMCIvPjxsaW5lIHgxPSIxOSIgeDI9IjIxIiB5MT0iMjEiIHkyPSIxOSIvPjxwb2x5bGluZSBwb2ludHM9IjE0LjUgNi41IDE4IDMgMjEgMyAyMSA2IDE3LjUgOS41Ii8+PGxpbmUgeDE9IjUiIHgyPSI5IiB5MT0iMTQiIHkyPSIxOCIvPjxsaW5lIHgxPSI3IiB4Mj0iNCIgeTE9IjE3IiB5Mj0iMjAiLz48bGluZSB4MT0iMyIgeDI9IjUiIHkxPSIxOSIgeTI9IjIxIi8+PC9zdmc+',
    genres: [
      { id: 4, name: 'Fighting', slug: 'fighting' },
      { id: 5, name: 'Shooter', slug: 'shooter' },
      { id: 8, name: 'Platform', slug: 'platform' },
      {
        id: 25,
        name: "Hack and slash/Beat 'em up",
        slug: 'hack-and-slash-beat-em-up',
      },
      { id: 33, name: 'Arcade', slug: 'arcade' },
    ],
  },
  {
    categoryName: 'Creative / Artistic',
    categorySlug: 'creative-artistic',
    categoryImage:
      'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXdhbmQtc3BhcmtsZXMiPjxwYXRoIGQ9Im0yMS42NCAzLjY0LTEuMjgtMS4yOGExLjIxIDEuMjEgMCAwIDAtMS43MiAwTDIuMzYgMTguNjRhMS4yMSAxLjIxIDAgMCAwIDAgMS43MmwxLjI4IDEuMjhhMS4yIDEuMiAwIDAgMCAxLjcyIDBMMjEuNjQgNS4zNmExLjIgMS4yIDAgMCAwIDAtMS43MiIvPjxwYXRoIGQ9Im0xNCA3IDMgMyIvPjxwYXRoIGQ9Ik01IDZ2NCIvPjxwYXRoIGQ9Ik0xOSAxNHY0Ii8+PHBhdGggZD0iTTEwIDJ2MiIvPjxwYXRoIGQ9Ik03IDhIMyIvPjxwYXRoIGQ9Ik0yMSAxNmgtNCIvPjxwYXRoIGQ9Ik0xMSAzSDkiLz48L3N2Zz4=',
    genres: [
      { id: 7, name: 'Music', slug: 'music' },
      { id: 34, name: 'Visual Novel', slug: 'visual-novel' },
      { id: 32, name: 'Indie', slug: 'indie' },
      { id: 8, name: 'Platform', slug: 'platform' },
      { id: 13, name: 'Simulator', slug: 'simulator' },
    ],
  },
];

export const experiences = [
  {
    title: 'Relaxing / Casual',
    slug: 'relaxing-casual',
    image:
      'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWpveXN0aWNrIj48cGF0aCBkPSJNMjEgMTdhMiAyIDAgMCAwLTItMkg1YTIgMiAwIDAgMC0yIDJ2MmEyIDIgMCAwIDAgMiAyaDE0YTIgMiAwIDAgMCAyLTJ2LTJaIi8+PHBhdGggZD0iTTYgMTV2LTIiLz48cGF0aCBkPSJNMTIgMTVWOSIvPjxjaXJjbGUgY3g9IjEyIiBjeT0iNiIgcj0iMyIvPjwvc3ZnPg==',
    genres: [
      'simulator',
      'pinball',
      'puzzle',
      'quiz-trivia',
      'card-and-board-game',
    ],
  },
  {
    title: 'Adventurous / Immersive',
    slug: 'adventurous-immersive',
    image:
      'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLW1vdW50YWluIj48cGF0aCBkPSJtOCAzIDQgOCA1LTUgNSAxNUgyTDggM3oiLz48L3N2Zz4=',
    genres: [
      'role-playing-rpg',
      'adventure',
      'visual novel',
      'point-and-click',
    ],
  },
  {
    title: 'Strategic / Thoughtful',
    slug: 'strategic-thoughtful',
    image:
      'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWRpY2UtMyI+PHJlY3Qgd2lkdGg9IjE4IiBoZWlnaHQ9IjE4IiB4PSIzIiB5PSIzIiByeD0iMiIgcnk9IjIiLz48cGF0aCBkPSJNMTYgOGguMDEiLz48cGF0aCBkPSJNMTIgMTJoLjAxIi8+PHBhdGggZD0iTTggMTZoLjAxIi8+PC9zdmc+',
    genres: [
      'strategy',
      'turn-based-strategy-tbs',
      'tactical',
      'real-time-strategy-rts',
    ],
  },
  {
    title: 'Competitive / Exciting',
    slug: 'competitive-exciting',
    image:
      'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWxhbmQtcGxvdCI+PHBhdGggZD0ibTEyIDggNi0zLTYtM3YxMCIvPjxwYXRoIGQ9Im04IDExLjk5LTUuNSAzLjE0YTEgMSAwIDAgMCAwIDEuNzRsOC41IDQuODZhMiAyIDAgMCAwIDIgMGw4LjUtNC44NmExIDEgMCAwIDAgMC0xLjc0TDE2IDEyIi8+PHBhdGggZD0ibTYuNDkgMTIuODUgMTEuMDIgNi4zIi8+PHBhdGggZD0iTTE3LjUxIDEyLjg1IDYuNSAxOS4xNSIvPjwvc3ZnPg==',
    genres: ['sport', 'racing', 'shooter', 'moba', 'fighting'],
  },
  {
    title: 'Action-packed / Intense',
    slug: 'action-packed-intense',
    image:
      'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXN3b3JkcyI+PHBvbHlsaW5lIHBvaW50cz0iMTQuNSAxNy41IDMgNiAzIDMgNiAzIDE3LjUgMTQuNSIvPjxsaW5lIHgxPSIxMyIgeDI9IjE5IiB5MT0iMTkiIHkyPSIxMyIvPjxsaW5lIHgxPSIxNiIgeDI9IjIwIiB5MT0iMTYiIHkyPSIyMCIvPjxsaW5lIHgxPSIxOSIgeDI9IjIxIiB5MT0iMjEiIHkyPSIxOSIvPjxwb2x5bGluZSBwb2ludHM9IjE0LjUgNi41IDE4IDMgMjEgMyAyMSA2IDE3LjUgOS41Ii8+PGxpbmUgeDE9IjUiIHgyPSI5IiB5MT0iMTQiIHkyPSIxOCIvPjxsaW5lIHgxPSI3IiB4Mj0iNCIgeTE9IjE3IiB5Mj0iMjAiLz48bGluZSB4MT0iMyIgeDI9IjUiIHkxPSIxOSIgeTI9IjIxIi8+PC9zdmc+',
    genres: ['hack-and-slash-beat-em-up', 'platform', 'arcade'],
  },
  {
    title: 'Creative / Artistic',
    slug: 'creative-artistic',
    image:
      'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXdhbmQtc3BhcmtsZXMiPjxwYXRoIGQ9Im0yMS42NCAzLjY0LTEuMjgtMS4yOGExLjIxIDEuMjEgMCAwIDAtMS43MiAwTDIuMzYgMTguNjRhMS4yMSAxLjIxIDAgMCAwIDAgMS43MmwxLjI4IDEuMjhhMS4yIDEuMiAwIDAgMCAxLjcyIDBMMjEuNjQgNS4zNmExLjIgMS4yIDAgMCAwIDAtMS43MiIvPjxwYXRoIGQ9Im0xNCA3IDMgMyIvPjxwYXRoIGQ9Ik01IDZ2NCIvPjxwYXRoIGQ9Ik0xOSAxNHY0Ii8+PHBhdGggZD0iTTEwIDJ2MiIvPjxwYXRoIGQ9Ik03IDhIMyIvPjxwYXRoIGQ9Ik0yMSAxNmgtNCIvPjxwYXRoIGQ9Ik0xMSAzSDkiLz48L3N2Zz4=',
    genres: ['indie', 'music'],
  },
];
