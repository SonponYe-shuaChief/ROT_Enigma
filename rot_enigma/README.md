

## Project Overview

This project is a small Next.js app for experimenting with ROT (rotation) ciphers. It provides two distinct user flows:

- **Normal**: A page that applies a standard ROT-N cipher. The user selects a rotation value (N) and the app encodes/decodes text accordingly.
- **Enigma**: A page that applies a custom, personal algorithm (the author's Enigma-style algorithm) instead of the standard ROT-N behavior.

## Pages

- **Normal page**: implemented as `app/pages/normal.jsx` — lets users pick a ROT value and process text using the conventional ROT-N algorithm.
- **Enigma page**: implemented as `app/pages/Enigma.jsx` — uses a bespoke algorithm (the project's personal Enigma algorithm) to transform text.

## Components

The app breaks UI into small components (found under `app/components/`):

- `button.jsx`: shared button component used across the app.
- `input.jsx`: text input component for entering plaintext or ciphertext.
- `output.jsx`: displays the transformed text result.
- `rot_selector.jsx`: control for selecting the ROT-N value (used on the Normal page).
- `footer.jsx`: page footer used site-wide.

