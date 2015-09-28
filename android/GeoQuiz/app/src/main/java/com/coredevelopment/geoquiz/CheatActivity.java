package com.coredevelopment.geoquiz;

import android.content.Intent;
import android.support.v7.app.ActionBarActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;


public class CheatActivity extends ActionBarActivity {

    public static final String EXTRA_ANSWER_IS_TRUE =
            "com.coredevelopment.geoquiz.answer_is_true";
    public static final String EXTRA_ANWSER_SHOWN =
            "com.coredevelopment.geoquiz.answer_shown";

    private static final String TAG = "CheatActivity";
    private static final String KEY_SHOWN_ANSWER = "shown_answer";

    //make answer shown a global variable so it can be saved when
    //  onSaveInstanceState(Bundle) is invoked.
    private boolean mAnswerShown = false;

    //holds whether the answer to the question is true or not
    private boolean mAnswerIsTrue;

    private TextView mAnswerTextView;
    private Button mShowAnswerButton;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_cheat);

        /*  SET REFERENCES */
        mAnswerTextView     = (TextView)findViewById(R.id.answerTextView);
        mShowAnswerButton   = (Button)findViewById(R.id.showAnswerButton);

        //first check to see what is being passed from QuizActivity
        //get the answer to the question from QuizActivity, since it calls this
        //  activity (Cheat activity) and passes the info via an Intent
        mAnswerIsTrue = getIntent().getBooleanExtra(EXTRA_ANSWER_IS_TRUE, false);

        //second get the information from the savedInstanceState bundle (if there is one)
        //when onCreate is called by the Android OS check to see if there is data in
        //  savedInstanceState
        if(savedInstanceState != null){
            mAnswerShown = savedInstanceState.getBoolean(KEY_SHOWN_ANSWER, false);
            Log.d(TAG, "SavedInstanceState inside onCreate() mAnswerShown = " + mAnswerShown);

        }

        /*  SET LISTENERS  */
        mShowAnswerButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                mAnswerShown = true;
                updateAnswerTextView();
                setAnswerShownResult(mAnswerShown);
            }

        });

        //if the answer has been shown(the user cheated), then update the text on the screen
        //  to reflect that. This will be true if it if the imported from saveInstanceState
        if(mAnswerShown){
            Log.d(TAG, "if(mAnswerShown) inside onCreate() at the end mAnswerShown = " + mAnswerShown);
            updateAnswerTextView();
            setAnswerShownResult(mAnswerShown);
        }
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        getMenuInflater().inflate(R.menu.menu_cheat, menu);
        return true;
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        // Handle action bar item clicks here. The action bar will
        // automatically handle clicks on the Home/Up button, so long
        // as you specify a parent activity in AndroidManifest.xml.
        int id = item.getItemId();

        //noinspection SimplifiableIfStatement
        if (id == R.id.action_settings) {
            return true;
        }

        return super.onOptionsItemSelected(item);
    }

    /*
    This method is used to save the state of variables before the activity is destroyed
     */
    @Override
    public void onSaveInstanceState(Bundle savedInstanceState){
        super.onSaveInstanceState(savedInstanceState);
        Log.d(TAG, "onSaveInstanceState");
        savedInstanceState.putBoolean(KEY_SHOWN_ANSWER, mAnswerShown);
    }

    /**
     * This method creates an Intent to send back to Quiz Activity.
     *  This intent holds whether the variable isAnswerShown is true or false.
     *  Then it sets the result as ok and stores the Intent so the data can be
     *  passed back to QuizActivity
     * @param isAnswerShown -> indicates whether or not the User cheated
     */
    private void setAnswerShownResult(boolean isAnswerShown) {
        Intent data = new Intent();
        data.putExtra(EXTRA_ANWSER_SHOWN, isAnswerShown);
        setResult(RESULT_OK, data);
        Log.d(TAG, "setAnswerShownResult() inside onCreate() mAnswerShown = " + mAnswerShown);
    }

    /**
     * This method is used to update the mAnswerTextView with true or false.
     *  It is based on whether the answer it recieves form QuizActivity
     *  is true or false.
     */
    private void updateAnswerTextView() {
        Log.d(TAG, "updateAnswerTextView() mAnswerShown = " + mAnswerShown);
        if(mAnswerIsTrue)
            mAnswerTextView.setText(R.string.true_button);
        else
            mAnswerTextView.setText(R.string.false_button);


    }
}
