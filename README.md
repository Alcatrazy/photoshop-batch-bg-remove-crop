Batch Remove Background & Crop (Photoshop JSX)
Repository name suggestion: photoshop-batch-bg-remove-crop
________________________________________
English / EN
A Photoshop automation script that batch-processes images by removing backgrounds via a Photoshop Action, center-cropping to a 1:1 ratio, and exporting transparent PNG files.
Created by Alcatrazy.
Inspired by: https://github.com/kavindupasan/batch-bg-remover-photoshop
Features
•	Auto Tone
•	Auto Contrast
•	Auto Color
•	Remove Background (via Photoshop Action)
•	Center Crop to 1:1 aspect ratio
•	Export as PNG with transparency
Requirements
•	Adobe Photoshop (with scripting enabled)
•	A Photoshop Action file: BG remove.atn
•	The Action Set must be named “BG remove”
•	The Action inside the set must be named “Remove Background”
Folder Structure
C:\ps\src   // source images
C:\ps\out   // processed PNG output
Setup
1.	Load the Photoshop Action file in the Actions panel.
2.	Create the required folders: C:\ps\src and C:\ps\out
3.	Save the script as remove-bg-no-color.jsx
4.	Place all source images into C:\ps\src
Supported Input Formats
•	JPG / JPEG
•	PNG
•	TIFF
•	PSD
•	RAW formats (CR2, NEF, RAW)
•	HEIC
How to Run
1.	Open Photoshop
2.	File → Scripts → Browse → select remove-bg-no-color.jsx
3.	The script will process each image: unlock background layer, run the Action, crop 1:1, save PNG in C:\ps\out
Output
•	PNG format
•	Transparent background
•	1:1 aspect ratio
•	Auto-generated filename with timestamp
Notes
•	Ensure Action names match exactly: Action Set: BG remove, Action: Remove Background
•	Dialogs are disabled for full automation
Repository Details
Short description: Batch Photoshop JSX script for automatic background removal, 1:1 center crop, and transparent PNG export. Topics / Tags: photoshop jsx photoshop-script batch-processing background-removal image-processing automation png crop
License
MIT License
Copyright (c) 2025 Alcatrazy
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
Credits
•	Script author: Alcatrazy
•	Inspired by: https://github.com/kavindupasan/batch-bg-remover-photoshop



________________________________________



Български / BG
Скрипт за Photoshop, който автоматично обработва изображения: премахва фонове чрез Photoshop Action, изрязва центрирано 1:1 и експортира прозрачни PNG файлове.
Създаден от Alcatrazy.
Вдъхновено от: https://github.com/kavindupasan/batch-bg-remover-photoshop
Функции
•	Авто тон
•	Авто контраст
•	Авто цвят
•	Премахване на фон (чрез Photoshop Action)
•	Центрирано изрязване 1:1
•	Запис като PNG с прозрачен фон
Изисквания
•	Adobe Photoshop (с разрешен скриптинг)
•	Photoshop Action файл: BG remove.atn
•	Името на Action Set трябва да е “BG remove”
•	Името на Action вътре в набора трябва да е “Remove Background”
Структура на папките
C:\ps\src   // изходни изображения
C:\ps\out   // обработени PNG файлове
Настройка
1.	Заредете Photoshop Action в панела Actions.
2.	Създайте папките: C:\ps\src и C:\ps\out
3.	Запишете скрипта като remove-bg-no-color.jsx
4.	Поставете всички изходни изображения в C:\ps\src
Поддържани формати
•	JPG / JPEG
•	PNG
•	TIFF
•	PSD
•	RAW формати (CR2, NEF, RAW)
•	HEIC
Как да стартирате
1.	Отворете Photoshop
2.	Файл → Скриптове → Преглед → изберете remove-bg-no-color.jsx
3.	Скриптът ще обработи всяко изображение: отключва Background layer, стартира Action, изрязва 1:1, записва PNG в C:\ps\out
Изход
•	PNG формат
•	Прозрачен фон
•	Пропорции 1:1
•	Автоматично генерирано име с времева отметка
Бележки
•	Уверете се, че имената на Actions съвпадат точно: Action Set: BG remove, Action: Remove Background
•	Диалоговите прозорци са деактивирани за пълна автоматизация
Детайли за репото
Кратко описание: Скрипт за Photoshop JSX за автоматично премахване на фон, центрирано изрязване 1:1 и PNG с прозрачен фон. Теми / Tags: photoshop jsx photoshop-script batch-processing background-removal image-processing automation png crop
Лиценз
MIT License
Copyright (c) 2025 Alcatrazy
Разрешава се използването, копирането, модифицирането, публикуването, разпространението и продажбата на софтуера, съгласно условията на MIT License.
Авторство
•	Скрипт автор: Alcatrazy
•	Вдъхновено от: https://github.com/kavindupasan/batch-bg-remover-photoshop
