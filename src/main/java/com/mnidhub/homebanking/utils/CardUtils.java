package com.mnidhub.homebanking.utils;

public final class CardUtils {

    private CardUtils(){}

    public static String getRandomNumber(int min, int max) {
        return  (int)((Math.random() * (max - min)) + min ) + "-" +
                (int)((Math.random() * (max - min)) + min ) + "-" +
                (int)((Math.random() * (max - min)) + min ) + "-" +
                (int)((Math.random() * (max - min)) + min );
    }

    public static int getRandomNumberCvv(int min, int max) {
        return (int) ((Math.random() * (max - min)) + min);
    }
}
