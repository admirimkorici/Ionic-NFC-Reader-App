package io.ionic.starter;

import android.os.Bundle;
import com.getcapacitor.BridgeActivity;
import com.smartprocesses.plugin.nfcreaderPlugin;

public class MainActivity extends BridgeActivity {
  @Override
  public void onCreate(Bundle savedInstanceState){
    registerPlugin(nfcreaderPlugin.class);
    super.onCreate(savedInstanceState);
  }
}
