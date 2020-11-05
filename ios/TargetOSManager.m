//
//  TargetOSManager.m
//  TypescriptReactNative
//
//  Created by Hemant on 05/11/20.
//


#import "TargetOSManager.h"

@implementation TargetOSManager

RCT_EXPORT_MODULE();
RCT_REMAP_METHOD(isRunningOnDevice, isRunningOnDeviceWithResolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)
{
    NSString *deviceOrSimulator = @"Device";
     #if TARGET_OS_SIMULATOR
      deviceOrSimulator = @"Simulator";
     #endif

     NSString *message = [NSString stringWithFormat: @"Running on iOS %@", deviceOrSimulator];
     resolve(message);
}
@end

