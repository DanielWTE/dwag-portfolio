---
title: 'AniPic.co'
metaTitle: 'AniPic'
metaDesc: 'This article is about the creation and the idea behind AniPic.'
website: 'https://anipic.co/'
---

## What is AniPic?
To be serious, I've had the idea right now (18.02.2023).

AniPic is a website where you can filter and search for frames / images from anime series by entering the anime name, or other tags like "crying", "smiling", "fighting" or "Rainy Weather".
All frames / images are categorized and tagged by AI and different tools. The AI is detecting what is happening in the image, what is the background, the anime name etc.

So my plan is to cut up a lot of anime series into frames and store them on a media server. Then I will use AI to categorize, tag and finally store them in a database.


The feature list:
1. No authentication (Everyone can use it)
2. It should be fast to search and filter (Also with a lot of data)
 
## How I will do it
For AniPic I will use following tools:
1. NextJS & TailWindCSS (Frontend) NodeJS (Backend)
2. MongoDB (Database)
3. Python (AI, Image processing, etc.)
5. Docker (Containerization)
6. A lot of computing power (I will use my own server**s** for this project 😥)

## Logo and Name
I've just combined "Anime" and "Picture" and it was "AniPic".

![AniPic Logo](../public/anipicCover.png)

## What I've done so far

### AniPic Duplicate Check: Efficiently Deleting Duplicate Images

We all know the hassle of manually searching for and deleting duplicate images in a folder. As a continuation of AniPic, I have developed a script that automates this process using a **convolutional autoencoder** and the **mean squared error (MSE)** as a similarity metric. The script displays the images and their MSE value in a tkinter window and creates a log file with the deleted and checked files. It can be run in parallel using the multiprocessing module.

![Duplicate Checker Preview](../public/anipic-duplicate-deleter.gif)

#### How does it work?

The process can be broken down into the following steps:

1. Load the images from the selected folder
2. Encode the images using a convolutional autoencoder with the following size: 144x81x3
3. Calculate the MSE between the encoded images
4. Delete the images with an MSE below a threshold

#### Convolutional Autoencoder

The convolutional autoencoder helps in encoding the images, reducing their dimensionality while preserving their most important features. The autoencoder has two parts: an encoder and a decoder. The encoder reduces the input image's dimensionality, and the decoder reconstructs the original image from the reduced representation. The autoencoder is trained to minimize the difference between the original image and the reconstructed image.

#### Mean Squared Error (MSE)

The mean squared error (MSE) is a metric that measures the average squared difference between two images. It is calculated as the average of the squared differences between the corresponding pixel values of the images. A lower MSE value indicates that the images are more similar.

#### Using the Script

The script takes the following arguments:

* images_folder: Path to the folder containing the images
* chunk_size: Number of image files in each chunk (default is 5000)
* threshold: MSE threshold for determining duplicates (default is 0.0007)
* num_processes: Number of parallel processes for processing the chunks (default is 24)
* show_gui: Whether to display the tkinter window (default is True)

The tkinter window displays the current and comparison images, MSE value, elapsed time, RAM usage, chunk progress, and the number of deleted files.

#### Conclusion

This script efficiently deletes duplicate images from a folder using a convolutional autoencoder and the mean squared error (MSE) as a similarity metric. It also provides a user-friendly interface using a tkinter window to display the images and their MSE value. With this script, you can effortlessly clean up your image folders and save valuable storage space.

You can find the complete code on the Official AniPic GitHub Repository.