import * as _ from 'lodash';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
//import ImagePicker from 'react-native-image-picker/lib/commonjs';
import {request, RESULTS, PERMISSIONS} from 'react-native-permissions';
import {showToast} from '../../feature/utilities/DialogUtils';
import ImageResizer from 'react-native-image-resizer'
import {Platform} from 'react-native';

export const loadImage = () =>
  new Promise((resolve, reject) => {
    const options = {
      title: 'Select Cover Image',
      mediaType: 'photo',
      quality: 1,
    };

    {
      Platform.OS === 'android' &&
        launchImageLibrary(options, response => {
          if (response.didCancel) {
            reject(response);
          } else if (response.error) {
            reject(response);
          } else if (response.customButton) {
            reject(response);
          } else {
            //  console.log(response,'response response')
            ImageResizer.createResizedImage(response.uri,800,600,"JPEG",80,0,null)
            .then(response => {
              //  console.log(response,'response')
                const source = {
                    uri: response.uri,
                    type: 'image/jpeg',
                    name: response.name,
                  };
                  resolve(source);
            })
            .catch(err => {
              // Oops, something went wrong. Check that the filename is correct and
              // inspect err to get more details.
            });
          }
        });
    }
    {
      Platform.OS === 'ios' &&
        request(PERMISSIONS.IOS.PHOTO_LIBRARY).then(result => {
          switch (result) {
            case RESULTS.UNAVAILABLE:
              // console.log( 'This feature is not available (on this device / in this context)',
              break;
            case RESULTS.DENIED:
              break;
            case RESULTS.GRANTED:
              launchImageLibrary(options, response => {
                if (response.didCancel) {
                  reject(response);
                } else if (response.error) {
                  reject(response);
                } else if (response.customButton) {
                  reject(response);
                } else {
                  //  ImageResizer.createResizedImage(response.uri,1080,1920,"JPEG",85,0,null).then((responses)=>{
                  const source = {
                    uri: response.uri,
                    type: response.type,
                    name: response.fileName,
                  };
                  resolve(source);
                  //  }).catch((err)=>{
                  //    const source = { uri: response.uri, type: response.type, name: response.name }
                  //resolve(source)
                  //    })
                }
              });
              // console.log('The permission is granted');
              break;
            case RESULTS.BLOCKED:
              showToast('The permission is denied');
              break;
          }
        });
    }
  });

export const loadCamera = () =>
  new Promise((resolve, reject) => {
    const options = {
      title: 'Select Cover Image',
      mediaType: 'photo',
      quality: 1,
    };

    {
      Platform.OS === 'android' &&
        launchCamera(options, response => {
          if (response.didCancel) {
            reject(response);
          } else if (response.error) {
            reject(response);
          } else if (response.customButton) {
            reject(response);
          } else {
            const source = {
              uri: response.uri,
              type: response.type,
              name: response.fileName,
            };
            resolve(source);
          }
        });
    }
    {
      Platform.OS === 'ios' &&
        request(PERMISSIONS.IOS.PHOTO_LIBRARY).then(result => {
          switch (result) {
            case RESULTS.UNAVAILABLE:
              break;
            case RESULTS.DENIED:
              break;
            case RESULTS.GRANTED:
              launchCamera(options, response => {
                if (response.didCancel) {
                  reject(response);
                } else if (response.error) {
                  reject(response);
                } else if (response.customButton) {
                  reject(response);
                } else {
                  const source = {
                    uri: response.uri,
                    type: response.type,
                    name: response.fileName,
                  };
                  resolve(source);
                }
              });
              break;
            case RESULTS.BLOCKED:
              showToast('The permission is denied');
              break;
          }
        });
    }
  });

export const loadVideo = () =>
  new Promise((resolve, reject) => {
    const options = {
      mediaType: 'video',
      includeBase64: true,
    };

    {
      Platform.OS === 'android' &&
        launchImageLibrary(options, response => {
          if (response.didCancel) {
            reject(response);
          } else if (response.error) {
            reject(response);
          } else if (response.customButton) {
            reject(response);
          } else {
            const source = {
              uri: response.uri,
              type: 'video',
              name: response.fileName + '.mp4',
              filename: response.fileName + '.mp4',
            };
            resolve(source);
          }
        });
    }
    {
      Platform.OS === 'ios' &&
        request(PERMISSIONS.IOS.PHOTO_LIBRARY).then(result => {
          switch (result) {
            case RESULTS.UNAVAILABLE:
              break;
            case RESULTS.DENIED:
              break;
            case RESULTS.GRANTED:
              launchImageLibrary(options, response => {
                if (response.didCancel) {
                  reject(response);
                } else if (response.error) {
                  reject(response);
                } else if (response.customButton) {
                  reject(response);
                } else {
                  const source = {
                    uri: response.uri,
                    type: response.type,
                    name: response.fileName,
                  };
                  resolve(source);
                }
              });

              break;
            case RESULTS.BLOCKED:
              showToast('The permission is denied');
              break;
          }
        });
    }
  });
