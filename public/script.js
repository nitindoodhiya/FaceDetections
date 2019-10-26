const imgUpload = document.getElementById('imgUpload');

Promise.all([
    faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
    faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
    faceapi.nets.ssdMobilenetv1.loadFromUri('/models'),
]).then(start);

function start() {
    document.body.append('Loaded');
    imgUpload.addEventListener('change',async()=>{
        const image= await faceapi.bufferToImage(imgUpload.files[0]);

        const detections = await faceapi.detectAllFaces(image,new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceDescriptors;
        document.body.append(detections.length);

    })
}