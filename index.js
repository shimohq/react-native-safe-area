/**
 * @providesModule RNSafeArea
 * @flow
 */

import { NativeModules, NativeEventEmitter } from 'react-native';

const { RNSafeArea } = NativeModules;
const safeAreaEventEmitter = RNSafeArea && new NativeEventEmitter(RNSafeArea);
const rootSafeArea = RNSafeArea && RNSafeArea.rootSafeArea || {top: 0, left: 0, bottom: 0, right: 0}

function getRootSafeArea() {
  return RNSafeArea && RNSafeArea.getRootSafeArea && RNSafeArea.getRootSafeArea() ||  {top: 0, left: 0, bottom: 0, right: 0};
}

function getSafeArea(reactTag) {
  return RNSafeArea && RNSafeArea.getSafeArea && RNSafeArea.getSafeArea(reactTag);
}

function addListener(eventType: string, listener: Function, context: ?Object): EmitterSubscription {
  return safeAreaEventEmitter && safeAreaEventEmitter.addListener(eventType, listener, context);
}

function addSafeAreaListener(listener: Function, context: ?Object): EmitterSubscription {
  return safeAreaEventEmitter && safeAreaEventEmitter.addListener('SafeAreaEvent', listener, context);
}

function addRootSafeAreaListener(listener: Function, context: ?Object): EmitterSubscription {
  return safeAreaEventEmitter && safeAreaEventEmitter.addListener('RootSafeAreaEvent', listener, context);
}

export default {
  rootSafeArea,
  getSafeArea,
  getRootSafeArea,
  addListener,
  addSafeAreaListener,
  addRootSafeAreaListener
};
