package com.mnidhub.homebanking.utils;

public final class CardUtils {

    private CardUtils(){}

    public static String getRandomNumber(int min, int max) {
<<<<<<< HEAD
        return ((Math.random() * (max - min)) + min ) + "-" +
                ((Math.random() * (max - min)) + min ) + "-" +
                ((Math.random() * (max - min)) + min ) + "-" +
                ((Math.random() * (max - min)) + min );
=======
        return  (int)((Math.random() * (max - min)) + min ) + "-" +
                (int)((Math.random() * (max - min)) + min ) + "-" +
                (int)((Math.random() * (max - min)) + min ) + "-" +
                (int)((Math.random() * (max - min)) + min );
>>>>>>> 222f73201d4f23034705aac6f122bf0a9f6c0280
    }

    public static int getRandomNumberCvv(int min, int max) {
        return (int) ((Math.random() * (max - min)) + min);
    }
}
