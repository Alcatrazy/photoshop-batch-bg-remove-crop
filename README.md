Batch Remove Background & Crop (Photoshop JSX)
Repository name suggestion: photoshop-batch-bg-remove-crop
A Photoshop automation script that batch-processes images by removing backgrounds via a Photoshop Action, center-cropping to a 1:1 ratio, and make auto tone / contrast and color correct, exporting transparent PNG files.
Created by Alcatrazy.
Inspired by: https://github.com/kavindupasan/batch-bg-remover-photoshop
________________________________________
Features / Функции
•	Auto Tone / Авто тон
•	Auto Contrast / Авто контраст
•	Auto Color / Авто цвят
•	Remove Background (via Photoshop Action) / Премахване на фон чрез Photoshop Action
•	Center Crop to 1:1 aspect ratio / Центрирано изрязване 1:1
•	Export as PNG with transparency / Запис като PNG с прозрачен фон
________________________________________
Requirements / Изисквания
•	Adobe Photoshop (with scripting enabled) / Photoshop с разрешен скриптинг
•	A Photoshop Action file: BG remove.atn
•	The Action Set must be named “BG remove” / Името на Action Set трябва да е “BG remove”
•	The Action inside the set must be named “Remove Background” / Името на Action вътре в набора трябва да е “Remove Background”
________________________________________
Folder Structure / Структура на папките
Create the following folders on your system / Създайте следните папки на вашия компютър:
C:\ps\src   // source images / изходни изображения
C:\ps\out   // processed PNG output / обработени PNG файлове
________________________________________
Setup / Настройка
1.	Load the Photoshop Action file / Заредете Photoshop Action:
o	Open Photoshop / Отворете Photoshop
o	Go to Actions panel / Панел Actions
o	Load BG remove.atn
2.	Create the required folders / Създайте необходимите папки:
o	C:\ps\src
o	C:\ps\out
3.	Copy the script file / Копирайте скрипт файла:
o	Save the script as remove-bg-no-color.jsx
4.	Place all source images into / Поставете всички изходни изображения в:
o	C:\ps\src
________________________________________
Supported Input Formats / Поддържани формати
•	JPG / JPEG
•	PNG
•	TIFF
•	PSD
•	RAW formats (CR2, NEF, RAW)
•	HEIC
________________________________________
How to Run / Как да стартирате
1.	Open Photoshop / Отворете Photoshop
2.	Go to File → Scripts → Browse / Файл → Скриптове → Преглед
3.	Select remove-bg-no-color.jsx / Изберете remove-bg-no-color.jsx
4.	The script will / Скриптът ще:
o	Open each image / Отвори всяко изображение
o	Unlock the background layer / Отключи Background layer
o	Run the background removal action / Стартира Action за премахване на фон
o	Crop the image to a centered 1:1 square / Изреже изображението до 1:1 центрирано
o	Save a PNG with transparency in C:\ps\out / Запише PNG с прозрачен фон в C:\ps\out
________________________________________
Output / Изход
•	PNG format / PNG формат
•	Transparent background / Прозрачен фон
•	1:1 aspect ratio / Пропорции 1:1
•	Auto-generated filename with timestamp / Автоматично генерирано име с времева отметка
________________________________________
Notes / Бележки
•	Make sure the Action names match exactly / Проверете дали имената на Actions съвпадат точно:
o	Action Set: BG remove
o	Action: Remove Background
•	Dialogs are disabled for fully automated batch processing / Диалоговите прозорци са деактивирани за автоматична обработка
________________________________________
Repository Details / Детайли за репото
Short description (GitHub) / Кратко описание: Batch Photoshop JSX script for automatic background removal, 1:1 center crop, and transparent PNG export using Actions.
Topics / Tags / Теми: photoshop jsx photoshop-script batch-processing background-removal image-processing automation png crop
________________________________________
License / Лиценз
MIT License
Copyright (c) 2025 Alcatrazy
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
________________________________________
Credits / Авторство
•	Script author / Скрипт автор: Alcatrazy
•	Inspired by / Вдъхновено от: https://github.com/kavindupasan/batch-bg-remover-photoshop
