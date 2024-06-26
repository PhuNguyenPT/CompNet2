package com.example.jpa.file;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@CrossOrigin("*")
@RestController
@RequestMapping("/files")
public class FileController {

    private final FileService fileService;

    public FileController(FileService fileService) {
        this.fileService = fileService;
    }

    @PostMapping("/upload")
    public ResponseEntity<?> uploadFile(
            @RequestParam("file")MultipartFile multipartFile) {
        return fileService.saveFile(multipartFile);
    }

    @GetMapping("/search/{file-name}")
    public ResponseEntity<?> findFileList(
            @PathVariable("file-name") String fileName) {
        return fileService.findFiles(fileName);
    }

    @DeleteMapping("/delete/{file-name}")
    public ResponseEntity<?> deleteFile(
            @PathVariable("file-name") String fileName) {
        return fileService.deleteFile(fileName);
    }
}
