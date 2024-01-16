// document.addEventListener("DOMContentLoaded", function () {
//     const fileInput = document.getElementById("fileUrl");
//     const downloadBtn = document.getElementById("downloadBtn");
//     const loadingContainer = document.getElementById("loadingContainer");
//     const downloadWrapper = document.getElementById("downloadWrapper");
  
//     downloadBtn.addEventListener("click", function () {
//       const videoUrl = fileInput.value;
  
//       // Display loading container and hide download wrapper
//       loadingContainer.style.display = "block";
//       downloadWrapper.style.display = "none";
  
//       // Simulate a delay (you can replace this with your actual file download logic)
//       setTimeout(async function () {
//         try {
//           // Fetch video, audio, and subtitle files
//           const [videoResponse, audioResponse, subtitleResponse] = await Promise.all([
//             fetch(videoUrl),
//             fetch('audio_url'), // replace 'audio_url' with the actual audio file URL
//             fetch('subtitle_url') // replace 'subtitle_url' with the actual subtitle file URL
//           ]);
  
//           // Convert responses to blobs
//           const [videoBlob, audioBlob, subtitleBlob] = await Promise.all([
//             videoResponse.blob(),
//             audioResponse.blob(),
//             subtitleResponse.blob()
//           ]);
  
//           // Create anchor elements for each file and trigger the download
//           downloadFile(videoBlob, 'video.mp4');
//           downloadFile(audioBlob, 'audio.mp3');
//           downloadFile(subtitleBlob, 'subtitle.srt');
  
//         } catch (error) {
//           console.error('Error downloading files:', error);
//         } finally {
//           // Hide loading container and show download wrapper
//           loadingContainer.style.display = "none";
//           downloadWrapper.style.display = "block";
  
//           // Reset the input value
//           fileInput.value = "";
//         }
//       }, 2000); // Simulated delay of 2 seconds
//     });
  
//     function downloadFile(blob, fileName) {
//       const downloadLink = document.createElement('a');
//       const objectUrl = URL.createObjectURL(blob);
//       downloadLink.href = objectUrl;
//       downloadLink.download = fileName;
//       document.body.appendChild(downloadLink);
//       downloadLink.click();
//       document.body.removeChild(downloadLink);
//       URL.revokeObjectURL(objectUrl);
//     }
//   });
  