package com.typescriptreactnative;
import android.os.Build;
import android.widget.Toast;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.util.Map;
import java.util.HashMap;
public class TargetOSManager extends ReactContextBaseJavaModule {
    private static ReactApplicationContext reactContext;

    //private static final String DURATION_SHORT_KEY = "SHORT";
    //private static final String DURATION_LONG_KEY = "LONG";

    TargetOSManager(ReactApplicationContext context) {
        super(context);
        reactContext = context;
    }

    @NonNull
    @Override
    public String getName() {
        return "TargetOSManager";
    }

    @ReactMethod
    public void isRunningOnDevice(Promise promise) {
        String deviceOrSimulator = "Device";

        if(Build.PRODUCT.matches(".*_?sdk_?.*")){
            deviceOrSimulator = "Emulator";
        }
        promise.resolve("Running on Android " + deviceOrSimulator);

    }
}