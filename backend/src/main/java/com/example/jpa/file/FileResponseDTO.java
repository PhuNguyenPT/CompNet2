package com.example.jpa.file;

import java.math.BigInteger;

public record FileResponseDTO(
        String name,
        String fileType,
        BigInteger size,
        byte[] fileByte
) {
}
