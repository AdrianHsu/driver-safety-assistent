package dots.adrianhsu.makentu;

/**
 * Created by adrianhsu on 2018/3/31.
 */
import android.util.Log;

import com.google.firebase.iid.FirebaseInstanceId;
import com.google.firebase.messaging.FirebaseMessagingService;
import com.google.firebase.messaging.RemoteMessage;


public class MyFirebaseMessagingService extends FirebaseMessagingService{
    @Override
    public void onMessageReceived(RemoteMessage remoteMessage) {
        Log.d("FCM", "onMessageReceived:"+remoteMessage.getFrom());
        String token = FirebaseInstanceId.getInstance().getToken();
        Log.d("FCM", "Token:"+token);
//        fCvCQx3D5vQ:APA91bFPdiHVvVHQJsAItvTNd1G_VpCGwNEYGgKI65c-DDBXJtDK6TMrScKwqREj0hN1XzSkg8hQoc1dHmhGm_41yDMWTFmCimVKlj0F2RCukFj2d-yRB3w6Clr96AuZbw4VjLks-kzp
    }
}