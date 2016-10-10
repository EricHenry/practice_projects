package com.coredev.a1_buton_click_counter;

import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.MenuItem;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;
import android.widget.Toast;


public class MainActivity extends AppCompatActivity {

    private Button ourButton;
    private TextView ourMessage;
    private int numTimesClicked = 0;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        //assign the ceated variables to the elements in the main activity layout
        // need to cast view to corressponding widget type.
        ourButton = (Button) findViewById(R.id.button);
        ourMessage = (TextView) findViewById(R.id.textView);

        //create a click listener by creating an anonymous class that implements
        // the onClickListener interface and assign it to the variable
        View.OnClickListener ourClickListener = new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                numTimesClicked += 1;
                String message = "The Button got tapped " + numTimesClicked + " time";
                if (numTimesClicked != 1) {
                    message += "s";
                }
                ourMessage.setText(message);
            }
        };

        //associate the clickListener variable to the button
        // so the button will execute the code from the listener
        // when the button is clicked
        ourButton.setOnClickListener(ourClickListener);

    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item){
        int id = item.getItemId();

        if (id == R.id.activity_main) {
            Toast toastMessage = Toast.makeText(this, "The settings menu option got tapped", Toast.LENGTH_LONG);
            toastMessage.show();
            return true;
        }

        return super.onOptionsItemSelected(item);
    }
}
